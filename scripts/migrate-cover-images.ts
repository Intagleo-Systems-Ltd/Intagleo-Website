import { config } from 'dotenv'
import { createClient } from '@sanity/client'

config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

async function downloadToBuffer(url: string): Promise<{ buffer: Buffer; contentType: string }> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const arrayBuffer = await response.arrayBuffer()
  return {
    buffer: Buffer.from(arrayBuffer),
    contentType: response.headers.get('content-type') ?? 'image/jpeg',
  }
}

async function migrate(type: string) {
  const docs = await client.fetch<Array<{ _id: string; cover_image: unknown }>>(
    `*[_type == $type && defined(cover_image)]{_id, cover_image}`,
    { type }
  )
  console.log(`\n[${type}] Found ${docs.length} documents`)

  for (const doc of docs) {
    if (typeof doc.cover_image !== 'string') {
      console.log(`  SKIP ${doc._id} — already a Sanity image asset`)
      continue
    }

    try {
      process.stdout.write(`  Downloading ${doc._id}...`)
      const { buffer, contentType } = await downloadToBuffer(doc.cover_image)
      const asset = await client.assets.upload('image', buffer, {
        filename: `${doc._id.replace('drafts.', '')}-cover`,
        contentType,
      })
      await client.patch(doc._id)
        .set({
          cover_image: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        })
        .commit()
      console.log(` ✓ uploaded as ${asset._id}`)
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
