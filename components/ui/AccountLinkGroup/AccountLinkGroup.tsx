import React, { FunctionComponent } from 'react'
import c from 'classnames'
import NextLink from 'next/link'
import { useIsMobile } from '@commerce/utils/hooks'
import { ChevronUp } from '@components/icons'
import Translations from 'constants/translations'
import IAccountLinkGroup from './AccountLinkGroup.interface'
import styles from './AccountLinkGroup.module.scss'

const AccountLinkGroup: FunctionComponent<IAccountLinkGroup> = (props) => {
  // todo: see where I can get the button list?
  const linkList = [
    { title: 'Overview', link: '/account', mobileOnly: true },
    { title: 'Orders', link: '/account/orders', mobileOnly: true },
    { title: 'Buy Again', link: '/account/buy-again', mobileOnly: true },
    { title: 'Prescriptions', link: '/account/prescriptions' },
    { title: 'My Pet', link: '/account/pets' },
    { title: 'My Vet', link: '#' },
    { title: 'My Favorties', link: '/account/favorites' },
  ]

  const isMobile = useIsMobile()
  const { mobileOnly, className } = props

  return (
    <div className={c(styles.root, className)}>
      {(!mobileOnly || isMobile) && (
        <div>
          <div className={styles.headerContainer}>
            <h5>{Translations.ACCOUNT.MY_PET_HEALTH}</h5>
          </div>
          {linkList.map((l) => (
            <NextLink href={l.link} key={l.title}>
              <div
                className={c(
                  styles.myPetHealthLink,
                  l.mobileOnly && !isMobile && styles.mobileOnly
                )}
              >
                <span>{l.title}</span>
                <ChevronUp className={styles.rightChevron} />
              </div>
            </NextLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default AccountLinkGroup
