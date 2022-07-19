import React, { FunctionComponent } from 'react'
import c from 'classnames'
import Translations from 'constants/translations'
import { useRouter } from 'next/router'
import useLogout from '@commerce/auth/use-logout'
import styles from './AccountHero.module.scss'
import IAccountHero from './AccountHero.interface'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'

const AccountHero: FunctionComponent<IAccountHero> = (props) => {
  const { headline, className } = props
  const logout = useLogout()
  const router = useRouter()

  // change Links
  const ButtonList = [
    { title: Translations.ACCOUNT.HEADER.OVERVIEW, link: '/account' },
    { title: Translations.ACCOUNT.ORDERS, link: '/account/orders' },
    { title: Translations.ACCOUNT.BUY_AGAIN, link: '/account/buy-again' },
    {
      title: Translations.ACCOUNT.PRESCRIPTIONS,
      link: '/account/prescriptions',
    },
    { title: Translations.ACCOUNT.HEADER.MY_PET, link: '/account/pets' },
    { title: Translations.ACCOUNT.HEADER.MY_VET, link: '/account/vets' },
    { title: Translations.ACCOUNT.MY_FAVORITES, link: '/account/favorites' },
  ]

  /**
   * Logout the user and push to home page
   */
  const logoutUser = () => {
    logout()?.then(() => {
      router.push('/')
    })
  }

  return (
    <div className={c(styles.root, 'h-auto', className)}>
      <div className="bg-cream">
        <div className="container flex items-start justify-start md:flex-col">
          <div className="py-45 md:py-80 md:w-full">
            <h1 className="typo-accountheadline mb-20 md:mb-0 text-blue md:max-w-full ">
              {headline}
            </h1>
            <div className="flex lg:hidden">
              <Button
                className="mr-20"
                variant="large"
                type="default"
                color="yellow"
                onClick={logoutUser}
              >
                {Translations.ACCOUNT.HEADER.LOGOUT}
              </Button>
              <ArrowCTA
                link={{ url: '/account', target: '', title: '' }}
                color="blue"
                orientation="right"
              >
                <p className="typo-h6">
                  {Translations.ACCOUNT.HEADER.ACCOUNT_SETTINGS}
                </p>
              </ArrowCTA>
            </div>
          </div>
        </div>
      </div>
      <div className="container hidden lg:flex items-baseline lg:mt-25 lg:w-full">
        <div className="nav-wrapper">
          {ButtonList.map((el) => (
            <ArrowCTA
              link={{ url: el.link, target: '', title: '' }}
              color="black"
              orientation="down"
              key={el.title}
            >
              <p className="text-18 leading-28">{el.title}</p>
            </ArrowCTA>
          ))}
        </div>

        <Button
          variant="large"
          type="default"
          color="yellow"
          className="ml-auto"
          onClick={logoutUser}
        >
          {Translations.ACCOUNT.HEADER.LOGOUT}
        </Button>
      </div>
    </div>
  )
}

export default AccountHero
