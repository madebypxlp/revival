import React, { FunctionComponent } from 'react'
import styles from './ArrowCTA.module.scss'
import cn from 'classnames'
import IArrowCTA from './ArrowCTA.interface'
import { ChevronUp } from '@components/icons'
import Link from 'next/link'
import { cleanHref } from '@lib/utils'

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
            'typo-right-arrow-cta',
            'rounded-focus-box'
          )}
          target={link?.target || target}
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
