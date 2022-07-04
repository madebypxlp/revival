import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import NavbarRoot from './NavbarRoot'
import styles from './Navbar.module.scss'
import { AcfOptionsHeader } from 'framework/wordpress/interfaces/header'
import AlertBar from '@components/ui/AlertBar/AlertBar'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import cn from 'classnames'
import renderNavigationLayouts from 'repeater/navigation-layouts'

const Navbar: FunctionComponent<{ data: AcfOptionsHeader }> = (props) => {
  const {
    data: { navigationLayouts, alertBanner, navigation },
  } = props

  const [openSubNav, setOpenSubNav] = useState<false | number>()

  return (
    <>
      {alertBanner?.active && <AlertBar {...alertBanner} />}
      <NavbarRoot className="bg-white">
        <div className="relative">
          <div className="container">
            <div className="flex flex-row justify-between py-5 align-center md:py-5">
              <div className="flex items-center flex-1">
                <Link href="/">
                  <a className={styles.logo} aria-label="Logo">
                    <Logo />
                  </a>
                </Link>
              </div>

              <div className="justify-center flex-1 hidden lg:flex">
                <Searchbar />
              </div>

              <div className="flex justify-end flex-1 space-x-8">
                <div
                  onClick={() => {
                    openSubNav !== 100
                      ? setOpenSubNav(100)
                      : setOpenSubNav(false)
                  }}
                >
                  <ArrowCTA color="blue" orientation="down">
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

                <UserNav />
              </div>
            </div>

            <div className="flex pb-5 lg:px-5 lg:hidden">
              <Searchbar id="mobile-search" />
            </div>
          </div>
        </div>

        <nav className="container py-20">
          <ul className="md:flex justify-around">
            {navigation.map((nav, index) => {
              const {} = nav
              return (
                <li
                  key={nav.title}
                  className="md:mx-20"
                  onClick={() => {
                    openSubNav !== index
                      ? setOpenSubNav(index)
                      : setOpenSubNav(false)
                  }}
                >
                  <ArrowCTA color={'black'} orientation={'down'}>
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
