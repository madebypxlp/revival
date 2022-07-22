import React, { FunctionComponent } from 'react'
import NextLink from 'next/link'
import c from 'classnames'
import styles from './BreadCrumbs.module.scss'
import IBreadCrumbs from './BreadCrumbs.interface'

const BreadCrumbs: FunctionComponent<IBreadCrumbs> = (props) => {
  const { breadcrumbs, className, sepCharacter = '/' } = props
  return (
    <div className={c(styles.root, className)}>
      {breadcrumbs.map((b, index) => (
        <React.Fragment key={b.href + b.label}>
          {index > 0 && <span>&nbsp;{sepCharacter}&nbsp;</span>}
          <NextLink href={b.href}>
            <a>{b.label}</a>
          </NextLink>
        </React.Fragment>
      ))}
    </div>
  )
}

export default BreadCrumbs
