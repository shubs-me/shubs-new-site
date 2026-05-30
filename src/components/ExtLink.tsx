interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

/**
 * External link that opens in a new tab with a safe rel and a visually-hidden
 * "(opens in new tab)" cue for screen-reader users.
 */
export default function ExtLink({ href, children, ...rest }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  )
}
