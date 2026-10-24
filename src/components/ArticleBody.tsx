import Link from 'next/link'
import React from 'react'

export type ArticleBlock =
  | { type: 'lead'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id?: string }
  | { type: 'quote'; text: string; source?: string }
  | { type: 'figure'; src: string; alt: string; caption?: string }

// Supports one inline syntax, [label](/path), for links between sections.
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

function renderInline(text: string): React.ReactNode {
  const out: React.ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0
    if (i > last) out.push(text.slice(last, i))
    out.push(
      <Link key={i} href={m[2]} className="article-link">
        {m[1]}
      </Link>,
    )
    last = i + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export function ArticleToc({ blocks, label }: { blocks: ArticleBlock[]; label: string }) {
  const headings = blocks.filter(
    (b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2' && Boolean(b.id),
  )
  if (headings.length < 3) return null
  return (
    <nav className="article-toc" aria-label={label}>
      <div className="article-toc-label">{label}</div>
      <ol>
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'lead':
            return (
              <p className="article-lead" key={i}>
                {renderInline(b.text)}
              </p>
            )
          case 'p':
            return <p key={i}>{renderInline(b.text)}</p>
          case 'h2':
            return (
              <h2 className="article-heading" id={b.id} key={i}>
                {b.text}
              </h2>
            )
          case 'quote':
            return (
              <blockquote className="article-quote" key={i}>
                <p>{b.text}</p>
                {b.source && <cite>{b.source}</cite>}
              </blockquote>
            )
          case 'figure':
            return (
              <figure className="article-figure" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} loading="lazy" />
                {b.caption && <figcaption className="figure-caption">{b.caption}</figcaption>}
              </figure>
            )
        }
      })}
    </div>
  )
}
