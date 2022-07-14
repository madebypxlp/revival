import React, { FunctionComponent } from 'react'
import NextLink from 'next/link'
import Translations from 'constants/translations'
import { useIsMobile } from '@commerce/utils/hooks'
import IAccountBreadcrumbs from './AccountBreadcrumbs.interface'
import styles from './AccountBreadcrumbs.module.scss'

const AccountBreadcrumbs: FunctionComponent<IAccountBreadcrumbs> = (props) => {
  const { current } = props
  const isMobile = useIsMobile()
  return (
    <div className={styles.root}>
      {isMobile && (
        <div className={styles.breadCrumbs}>
          <NextLink href="/account">{Translations.ACCOUNT.ACCOUNT}</NextLink>
          <span>&nbsp;/&nbsp;{current}</span>
        </div>
      )}
    </div>
  )
}

export default AccountBreadcrumbs
