import Link from 'next/link'

/**
 * Slim inline call-to-action band for mid-page placement on long pages,
 * distinct from the full pink CTA section at the foot of each page.
 */
export default function InlineCTA({
  text = 'Building or backing digital health that has to hold up?',
  cta = 'Get in touch →',
  href = '/contact',
}: {
  text?: string
  cta?: string
  href?: string
}) {
  return (
    <section className="inline-cta">
      <div className="wrap inline-cta-in">
        <p>{text}</p>
        <Link href={href} className="btn btn-clay">
          {cta}
        </Link>
      </div>
    </section>
  )
}
