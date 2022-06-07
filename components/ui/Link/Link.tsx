import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import cn from 'classnames'
import { FunctionComponent } from 'react'
import ILink from './Link.interface'
import styles from './Link.module.scss'

const Link: FunctionComponent<ILink> = (props) => {
  const { href, color, children, disabled = false } = props
  return (
    <NextLink href={href}>
      <a
        className={cn(
          styles.root,
          styles[color],
          disabled ? styles.disabled : '',
          'typo-hyperlink',
          'rounded-focus-box',
        )}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
