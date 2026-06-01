/**
 * Renders a heading split into a plain part, an emphasised (pink italic) part,
 * and an optional trailing plain part. Lets the CMS edit the highlighted words
 * separately without anyone touching markup. Empty parts are skipped.
 */
export default function Em({
  pre = '',
  em = '',
  post = '',
}: {
  pre?: string
  em?: string
  post?: string
}) {
  return (
    <>
      {pre}
      {em ? <em>{em}</em> : null}
      {post}
    </>
  )
}
