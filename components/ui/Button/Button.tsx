import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import IButton from './Button.interface'
import Link from '@components/ui/Link'

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
  } = props

  /**
   * Handle button click if prop is set
   */
  const handleClick = () => {
    if (onClick) onClick()
  }

  /**
   * check if the link contains the basic wp url and clean it
   * @returns string - link
   */
  const cleanHref = () => {
    let link = href
    if (
      link &&
      process.env.NEXT_PUBLIC_WP_URL &&
      link.includes(process.env.NEXT_PUBLIC_WP_URL)
    ) {
      link = link.replace(process.env.NEXT_PUBLIC_WP_URL, '')
    }

    return link
  }

  const hrefStripped = cleanHref()
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

  return hrefStripped ? <Link href={hrefStripped}>{button}</Link> : button
}

export default Button
