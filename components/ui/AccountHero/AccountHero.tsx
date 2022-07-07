import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './AccountHero.module.scss'
import IAccountHero from './AccountHero.interface'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'

const AccountHero: FunctionComponent<IAccountHero> = (props) => {
  const { headline = 'Lorem Ipsum', className } = props

  //change Links
  const ButtonList = [
    { title: 'Overview', link: '#' },
    { title: 'Orders', link: '#' },
    { title: 'Buy Again', link: '#' },
    { title: 'Prescriptions', link: '#' },
    { title: 'My Pet', link: '#' },
    { title: 'My Vet', link: '#' },
    { title: 'My Favorties', link: '#' },
  ]

  return (
    <div className={c(`${styles.root} h-auto `, className)}>
      <div className=" flex items-center justify-center md:justify-start md:items-start md:flex-col bg-cream">
        <div className="pl-20 md:pl-80 py-45 md:py-85  md:w-full">
          <h1 className="typo-accountheadline mb-20 md:mb-0 text-blue max-w-[336px] md:max-w-full ">
            {headline}
          </h1>
          <div className="flex lg:hidden">
            <Button
              className="mr-20"
              variant="large"
              type="default"
              color="yellow"
            >
              Logout
            </Button>
            <ArrowCTA color="blue" orientation="right">
              <p className="typo-h6">Account Settings</p>
            </ArrowCTA>
          </div>
        </div>
      </div>
      <div className="hidden lg:pl-80 lg:flex items-baseline lg:mt-25 lg:w-full">
        <div className="nav-wrapper">
          {ButtonList.map((el) => {
            return (
              <ArrowCTA color={'black'} orientation="down">
                <p className="text-18 leading-28">{el.title}</p>
              </ArrowCTA>
            )
          })}
        </div>

        <Button
          variant="large"
          type="default"
          color="yellow"
          className="ml-auto mr-50"
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default AccountHero
