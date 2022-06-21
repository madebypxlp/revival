import React, { FunctionComponent } from 'react'
import styles from './AccountHero.module.scss'
import IAccountHero from './AccountHero.interface'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'

const AccountHero: FunctionComponent<IAccountHero> = (props) => {
  const { headline } = props

  const buttonList = [
    { title: 'Overview', url: '#' },
    { title: 'Orders', url: '#' },
    { title: 'Buy Again', url: '#' },
    { title: 'Prescriptions', url: '#' },
    { title: 'My Pet', url: '#' },
    { title: 'My Vet', url: '#' },
    { title: 'My Favorties', url: '#' },
  ]

  return (
    <div className={styles.root}>
      <div className="py-45 md:py-80 bg-cream w-full">
        <div className="container">
          <h1 className="typo-accountheadline mb-20 md:mb-0 text-blue max-w-[336px] md:max-w-full ">
            {headline}
          </h1>
          <div className="flex md:hidden">
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
      <div className="container">
        <div className="hidden md:flex items-baseline md:mt-25 md:w-full">
          {buttonList.map((el) => {
            return (
              <ArrowCTA
                link={el}
                color={'black'}
                orientation="down"
                className="mr-55"
              />
            )
          })}

          <Button
            variant="large"
            type="default"
            color="yellow"
            className="ml-auto"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AccountHero
