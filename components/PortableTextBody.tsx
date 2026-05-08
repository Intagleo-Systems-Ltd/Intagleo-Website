"use client";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = value.url || value.asset?.url;
      if (!src) return null;
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={value.alt ?? ""}
            className="w-full rounded-xl object-cover"
          />
          {value.caption && (
            <figcaption className="text-center text-white/40 text-xs mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    codeBlock: ({ value }) => (
      <pre className="bg-white/5 border border-white/10 rounded-xl p-5 overflow-x-auto my-6">
        {value.language && (
          <div className="text-white/30 text-xs mb-3 font-mono">{value.language}</div>
        )}
        <code className="text-[#3B82F6] text-sm font-mono leading-relaxed">
          {value.code}
        </code>
      </pre>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3B82F6] hover:underline"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="text-[#3B82F6] bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    strong: ({ children }) => (
      <strong className="text-white/90 font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  block: {
    normal: ({ children }) => (
      <p className="text-white/60 leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-white font-semibold text-2xl mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-white font-semibold text-xl mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-white font-semibold text-lg mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#3B82F6]/60 pl-5 my-6 text-white/50 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-5 space-y-1.5 mb-4 text-white/60">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 space-y-1.5 mb-4 text-white/60">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

interface Props {
  value: PortableTextBlock[] | string;
}

export default function PortableTextBody({ value }: Props) {
  if (!value) return null;
  if (typeof value === "string") {
    return (
      <div
        className="prose prose-invert prose-sm md:prose-base max-w-none
          prose-headings:text-white prose-headings:font-semibold
          prose-p:text-white/60 prose-p:leading-relaxed
          prose-a:text-[#3B82F6] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white/90
          prose-li:text-white/60
          prose-hr:border-white/10
          prose-blockquote:border-l-[#3B82F6] prose-blockquote:text-white/50
          prose-code:text-[#3B82F6] prose-code:bg-white/5 prose-code:px-1 prose-code:rounded"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  }
  return <PortableText value={value} components={components} />;
}
