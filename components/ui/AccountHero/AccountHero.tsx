import React, { FunctionComponent } from 'react'
import c from 'classnames'
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
    { title: 'Overview', link: '/account' },
    { title: 'Orders', link: '/account/orders' },
    { title: 'Buy Again', link: '/account/buy-again' },
    { title: 'Prescriptions', link: '/account/prescriptions' },
    { title: 'My Pet', link: '/account/pets' },
    { title: 'My Vet', link: '/account/vets' },
    { title: 'My Favorties', link: '/account/favorites' },
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
                Logout
              </Button>
              <ArrowCTA
                link={{ url: '/account', target: '', title: '' }}
                color="blue"
                orientation="right"
              >
                <p className="typo-h6">Account Settings</p>
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
          Logout
        </Button>
      </div>
    </div>
  )
}

export default AccountHero
