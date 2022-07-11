import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import cn from 'classnames'
import { FunctionComponent } from 'react'
import { link } from 'fs'
import ILink from './Link.interface'
import styles from './Link.module.scss'

const Link: FunctionComponent<ILink> = (props) => {
  const {
    title,
    href = '',
    color,
    children,
    className,
    disabled = false,
    ...rest
  } = props

  const url = 'link' in props ? props.link.url : href

  return (
    <NextLink href={url}>
      <a
        className={cn(
          styles.root,
          className,
          color && styles[color],
          disabled ? styles.disabled : '',
          'typo-hyperlink',
          'rounded-focus-box'
        )}
        {...rest}
      >
        {children || ('link' in props && props.link.title)}
      </a>
    </NextLink>
  )
}

export default Link
