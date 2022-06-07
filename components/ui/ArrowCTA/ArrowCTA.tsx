import React, { FunctionComponent } from 'react'
import styles from './ArrowCTA.module.scss'
import cn from 'classnames'
import IArrowCTA from './ArrowCTA.interface'
import { ChevronUp } from '@components/icons'
import Link from 'next/link'
import { cleanHref } from '@lib/utils'

const ArrowCTA: FunctionComponent<IArrowCTA> = (props) => {
  const { href, color, orientation, children, disabled = false } = props

  return (
    <div className={styles.root}>
      <Link href={cleanHref(href)}>
        <a
          className={cn(
            styles[color],
            styles[orientation],
            disabled ? styles.disabled : '',
            'typo-right-arrow-cta',
            'rounded-focus-box'
          )}
        >
          <div>{children}</div>
          <ChevronUp />
        </a>
      </Link>
    </div>
  )
}

export default ArrowCTA
