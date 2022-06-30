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
    data: { alertBanner, navigation },
  } = props

  const [openSubNav, setOpenSubNav] = useState<false | number>()

  return (
    <>
      {alertBanner?.active && <AlertBar {...alertBanner} />}
      <NavbarRoot className="bg-white">
        <div className="container">
          <div className="relative flex flex-row justify-between py-5 align-center md:py-5">
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
              <UserNav />
            </div>
          </div>

          <div className="flex pb-5 lg:px-5 lg:hidden">
            <Searchbar id="mobile-search" />
          </div>
        </div>

        <nav
          className="container py-20"
          onMouseLeave={() => setOpenSubNav(false)}
        >
          <ul className="flex justify-around">
            {navigation.map((nav, index) => {
              const {} = nav
              return (
                <li
                  key={nav.title}
                  className="mx-20"
                  onMouseEnter={() => setOpenSubNav(index)}
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
