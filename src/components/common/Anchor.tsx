import Link, { LinkProps } from 'next/link'

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
export type AnchorProps = Props & LinkProps

const Anchor: React.FC<AnchorProps> = props => {
  const {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    ...anchorProps
  } = props

  const linkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
  }

  return (
    <Link {...linkProps}>
      <a {...anchorProps} />
    </Link>
  )
}

export default Anchor
