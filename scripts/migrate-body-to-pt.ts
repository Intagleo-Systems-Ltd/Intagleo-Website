import { config } from 'dotenv'
import { createClient } from '@sanity/client'

config({ path: '.env.local' })
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { v4 as uuid } from 'uuid'
import type {
  Root, Paragraph, Heading, Text, Strong, Emphasis,
  InlineCode, Link, Image as MdImage, List, ListItem,
  Code, Blockquote, Node,
} from 'mdast'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

const key = () => uuid().replace(/-/g, '').slice(0, 12)

async function uploadImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const buffer = Buffer.from(await res.arrayBuffer())
    const contentType = res.headers.get('content-type') ?? 'image/jpeg'
    const asset = await client.assets.upload('image', buffer, {
      filename: `inline-${key()}`,
      contentType,
    })
    return asset._id
  } catch {
    return null
  }
}

type PTBlock = Record<string, unknown>
type PTSpan = { _type: 'span'; _key: string; text: string; marks: string[] }
type MarkDef = { _type: string; _key: string; [k: string]: unknown }

function inlineToSpans(nodes: Node[], markDefs: MarkDef[], activeMarks: string[] = []): PTSpan[] {
  const spans: PTSpan[] = []
  for (const node of nodes) {
    if (node.type === 'text') {
      const text = (node as Text).value
      if (text) spans.push({ _type: 'span', _key: key(), text, marks: [...activeMarks] })
    } else if (node.type === 'strong') {
      spans.push(...inlineToSpans((node as Strong).children, markDefs, [...activeMarks, 'strong']))
    } else if (node.type === 'emphasis') {
      spans.push(...inlineToSpans((node as Emphasis).children, markDefs, [...activeMarks, 'em']))
    } else if (node.type === 'inlineCode') {
      spans.push({ _type: 'span', _key: key(), text: (node as InlineCode).value, marks: [...activeMarks, 'code'] })
    } else if (node.type === 'link') {
      const mk = key()
      markDefs.push({ _type: 'link', _key: mk, href: (node as Link).url })
      spans.push(...inlineToSpans((node as Link).children, markDefs, [...activeMarks, mk]))
    }
  }
  return spans
}

function makeBlock(style: string, children: Node[], markDefs: MarkDef[], extra: PTBlock = {}): PTBlock {
  const spans = inlineToSpans(children, markDefs)
  return {
    _type: 'block',
    _key: key(),
    style,
    markDefs,
    children: spans.length ? spans : [{ _type: 'span', _key: key(), text: '', marks: [] }],
    ...extra,
  }
}

async function mdastToPortableText(tree: Root): Promise<PTBlock[]> {
  const blocks: PTBlock[] = []

  for (const node of tree.children) {
    if (node.type === 'paragraph') {
      const para = node as Paragraph
      // Standalone image in a paragraph
      if (para.children.length === 1 && para.children[0].type === 'image') {
        const img = para.children[0] as MdImage
        const assetId = await uploadImage(img.url)
        if (assetId) {
          blocks.push({
            _type: 'image',
            _key: key(),
            alt: img.alt ?? '',
            asset: { _type: 'reference', _ref: assetId },
          })
        }
        continue
      }
      const markDefs: MarkDef[] = []
      blocks.push(makeBlock('normal', para.children, markDefs))

    } else if (node.type === 'heading') {
      const h = node as Heading
      const markDefs: MarkDef[] = []
      blocks.push(makeBlock(`h${h.depth}`, h.children, markDefs))

    } else if (node.type === 'blockquote') {
      const bq = node as Blockquote
      for (const child of bq.children) {
        if (child.type === 'paragraph') {
          const markDefs: MarkDef[] = []
          blocks.push(makeBlock('blockquote', (child as Paragraph).children, markDefs))
        }
      }

    } else if (node.type === 'code') {
      const c = node as Code
      blocks.push({
        _type: 'codeBlock',
        _key: key(),
        language: c.lang ?? 'text',
        code: c.value,
      })

    } else if (node.type === 'list') {
      const list = node as List
      const listItem = list.ordered ? 'number' : 'bullet'
      for (const item of list.children) {
        const li = item as ListItem
        const para = li.children.find((c) => c.type === 'paragraph') as Paragraph | undefined
        if (para) {
          const markDefs: MarkDef[] = []
          blocks.push(makeBlock('normal', para.children, markDefs, { listItem, level: 1 }))
        }
      }

    } else if (node.type === 'image') {
      const img = node as MdImage
      const assetId = await uploadImage(img.url)
      if (assetId) {
        blocks.push({
          _type: 'image',
          _key: key(),
          alt: img.alt ?? '',
          asset: { _type: 'reference', _ref: assetId },
        })
      }
    }
  }

  return blocks
}

async function migrate(type: string) {
  const docs = await client.fetch<Array<{ _id: string; body: unknown }>>(
    `*[_type == $type]{_id, body}`,
    { type }
  )
  console.log(`\n[${type}] Found ${docs.length} documents`)

  for (const doc of docs) {
    if (typeof doc.body !== 'string') {
      console.log(`  SKIP ${doc._id} — already Portable Text`)
      continue
    }

    try {
      process.stdout.write(`  Converting ${doc._id}...`)
      const tree = unified().use(remarkParse).parse(doc.body) as Root
      const portableText = await mdastToPortableText(tree)
      await client.patch(doc._id).set({ body: portableText }).commit()
      console.log(` ✓ ${portableText.length} blocks`)
    } catch (err) {
      console.log(` ✗ ${(err as Error).message}`)
    }
  }
}

async function main() {
  await migrate('blogPost')
  await migrate('caseStudy')
  console.log('\nDone!')
}

main().catch(console.error)
