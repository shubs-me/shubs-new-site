import Link from 'next/link'
import { marked } from 'marked'

/**
 * Shared layout for the Legal Notice, Privacy and Cookie pages. Each section's
 * body is authored as rich text (markdown) in the CMS and rendered to HTML
 * here, so headings, lists, bold and links are all editable without code.
 */
export type LegalContent = {
  hero: { label: string; title: string; sub: string }
  updated: string
  sections: { heading: string; body: string }[]
  more: { label: string; href: string }[]
}

// Open links to other sites in a new tab; keep internal links in place.
marked.use({
  renderer: {
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens)
      const external = /^https?:\/\//.test(href)
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ''
      const t = title ? ` title="${title}"` : ''
      return `<a href="${href}"${t}${attrs}>${text}</a>`
    },
  },
})

export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="label">{content.hero.label}</span>
          <h1>{content.hero.title}</h1>
          <p className="sub">{content.hero.sub}</p>
        </div>
      </header>

      <section className="light">
        <div className="wrap">
          <div className="prose legal-body">
            <div className="updated">{content.updated}</div>

            {content.sections.map((s, i) => (
              <section key={i}>
                <h2>{s.heading}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(s.body, { async: false }) as string,
                  }}
                />
              </section>
            ))}

            <div className="legal-more">
              {content.more.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
