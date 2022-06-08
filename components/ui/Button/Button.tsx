import React, { FunctionComponent } from 'react'
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
    target = '_self'
  } = props

  /**
   * Handle button click if prop is set
   */
  const handleClick = () => {
    if (onClick) onClick()
  }

  const hrefStripped = cleanHref(href)
  const button = (
    <button
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`${cn(
        className,
        styles.root,
        styles[variant],
        styles[type],
        styles[color],
        outline ? styles.outline : null
      )}`}
    >
      {children}
    </button>
  )

  return hrefStripped ? (
    <Link href={hrefStripped}>
      <a target={target}>{button}</a>
    </Link>
  ) : (
    button
  )
}

export default Button
