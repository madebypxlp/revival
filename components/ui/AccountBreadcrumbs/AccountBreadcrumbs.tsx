import React, { FunctionComponent } from 'react'
import styles from './AccountBreadcrumbs.module.scss'
import NextLink from 'next/link'
import IAccountBreadcrumbs from './AccountBreadcrumbs.interface'
import Translations from 'constants/translations'
import { useIsMobile } from '@commerce/utils/hooks'

const AccountBreadcrumbs: FunctionComponent<IAccountBreadcrumbs> = (props) => {
  const { current } = props
  const isMobile = useIsMobile()
  return (
    <div className={styles.root}>
      {isMobile && (
        <div className={styles.breadCrumbs}>
          <NextLink href={'/account'}>{Translations.ACCOUNT.ACCOUNT}</NextLink>
          <span>&nbsp;/&nbsp;{current}</span>
        </div>
      )}
    </div>
  )
}

export default AccountBreadcrumbs
