import React, { FunctionComponent, MouseEventHandler } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import IButton from './Button.interface'
import Link from 'next/link'
import { cleanHref } from '@lib/utils'

const Button: FunctionComponent<IButton> = (props) => {
  const {
    variant,
    type,
    children,
    ariaLabel = '',
    disabled = false,
    color,
    outline,
    className = '',
    onClick,
    href,
    target = '_self',
    link,
  } = props

  /**
   * Handle button click if prop is set
   */
  const handleClick = (event: any) => {
    if (onClick) onClick(event)
  }

  const hrefStripped = cleanHref(link?.url || href)
  const Type = hrefStripped ? 'a' : 'button'
  const button = (
    <Type
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={handleClick}
      target={link?.target || target}
      className={`${cn(
        className,
        styles.root,
        styles[variant],
        styles[type],
        styles[color],
        outline ? styles.outline : null
      )}`}
    >
      {children || link?.title}
    </Type>
  )

  return hrefStripped ? <Link href={hrefStripped}>{button}</Link> : button
}

export default Button
