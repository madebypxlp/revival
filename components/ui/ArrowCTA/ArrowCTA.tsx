import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { ChevronUp } from '@components/icons'
import Link from 'next/link'
import { cleanHref } from '@lib/utils'
import IArrowCTA from './ArrowCTA.interface'
import styles from './ArrowCTA.module.scss'

const ArrowCTA: FunctionComponent<IArrowCTA> = (props) => {
  const {
    href,
    color,
    orientation = 'right',
    children,
    disabled = false,
    target,
    link,
    className,
    subnav = false,
    ...rest
  } = props

  return (
    <div className={cn(styles.root, className)} {...rest}>
      <Link href={cleanHref(link?.url || href)}>
        <a
          className={cn(
            styles[color],
            styles[orientation],
            disabled ? styles.disabled : '',
            !subnav && 'typo-right-arrow-cta',
            !subnav && 'rounded-focus-box',
            subnav && 'typo-right-arrow-cta-subnav flex justify-between w-full',
            subnav && styles.subnav
          )}
          target={link?.target || target}
          {...rest}
        >
          <div>{children || link?.title}</div>
          <div className={styles.icon}>
            <ChevronUp />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArrowCTA
