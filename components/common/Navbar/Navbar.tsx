import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import { Searchbar, UserNav } from '@components/common'
import NavbarRoot from './NavbarRoot'
import styles from './Navbar.module.scss'
import { AcfOptionsHeader } from 'framework/wordpress/interfaces/header'
import AlertBar from '@components/ui/AlertBar/AlertBar'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import cn from 'classnames'
import renderNavigationLayouts from 'repeater/navigation-layouts'
import NavigationLayoutsYourAccount from './NavigationLayoutsYourAccount'
import Input from '@components/ui/Input/Input'
import { Account, Cart, Logo } from '@components/icons'

const Navbar: FunctionComponent<{ data: AcfOptionsHeader }> = (props) => {
  const {
    data: { navigationLayouts, alertBanner, navigation, yourAccount },
  } = props

  const [openSubNav, setOpenSubNav] = useState<false | number>()

  return (
    <>
      {alertBanner?.active && <AlertBar {...alertBanner} />}
      <NavbarRoot className="bg-white">
        <div className="relative">
          <div className="container">
            <div className="flex flex-row justify-center align-center py-20">
              <div className="flex items-center flex-1">
                <Link href="/">
                  <a className={styles.logo} aria-label="Logo">
                    <Logo />
                  </a>
                </Link>
              </div>

              <div className="justify-center flex-1 hidden lg:flex mr-90">
                <Input
                  className={cn(styles.search, 'xl:w-500 lg:w-350')}
                  type="search"
                  icon="search"
                  variant="blue-outline"
                  placeholder="What do your pets need today?"
                />
                {/* <Searchbar /> */}
              </div>
              <div className="flex justify-end items-center flex-1 space-x-8 w-full">
                <div>
                  <ArrowCTA
                    className="mr-60 whitespace-nowrap"
                    color="blue"
                    orientation="down"
                    onClick={() => {
                      openSubNav !== 100
                        ? setOpenSubNav(100)
                        : setOpenSubNav(false)
                    }}
                  >
                    Expert Help
                  </ArrowCTA>
                  <div
                    className={cn(
                      styles.subNav,
                      openSubNav === 100 && styles.openSubNav
                    )}
                  >
                    {renderNavigationLayouts(navigationLayouts[0])}
                  </div>
                </div>
                <div>
                  <div
                    className={cn(
                      styles.navButton,
                      'flex justify-center items-center cursor-pointer mr-50'
                    )}
                    onClick={() => {
                      openSubNav !== 101
                        ? setOpenSubNav(101)
                        : setOpenSubNav(false)
                    }}
                  >
                    <span className="mr-10 whitespace-nowrap">
                      Your Account
                    </span>
                    <Account />
                  </div>

                  <div
                    className={cn(
                      styles.subNav,
                      openSubNav === 101 && styles.openSubNav
                    )}
                  >
                    <NavigationLayoutsYourAccount data={yourAccount} />
                  </div>
                </div>
                <div
                  className={cn(
                    styles.navButton,
                    'flex justify-center items-center cursor-pointer relative'
                  )}
                >
                  <span className="mr-10">Cart</span>
                  <Cart />
                  <div
                    className={cn(
                      styles.cartItems,
                      'flex justify-center items-center h-25 w-25 bg-yellow rounded-full absolute left-60 -top-15'
                    )}
                  >
                    15
                  </div>
                </div>
                {/* <UserNav /> */}
              </div>
            </div>
          </div>
        </div>

        <nav className="container py-20">
          <ul className="md:flex justify-around">
            {navigation.map((nav, index) => {
              const {} = nav
              if (nav?.link) {
                return (
                  <li
                    key={nav.title}
                    className={cn(styles.specialsLink, 'md:mx-20')}
                  >
                    <Link color="red" href={nav.link.url}>
                      {nav.link.title}
                    </Link>
                  </li>
                )
              }
              return (
                <li key={nav.title} className="md:mx-20">
                  <ArrowCTA
                    color={'black'}
                    orientation={'down'}
                    onClick={() => {
                      openSubNav !== index
                        ? setOpenSubNav(index)
                        : setOpenSubNav(false)
                    }}
                  >
                    {nav.title}
                  </ArrowCTA>
                  <div
                    className={cn(
                      styles.subNav,
                      openSubNav === index && styles.openSubNav
                    )}
                  >
                    {renderNavigationLayouts(nav.navigationLayouts[0])}
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>
      </NavbarRoot>
    </>
  )
}

export default Navbar
