import { FunctionComponent, useEffect, useRef, useState } from 'react'
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
import { Account, Cart, Logo, Hamburger, ChevronUp } from '@components/icons'
import { useIsMobile } from '@commerce/utils/hooks'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'
import NavigationMarketingBox from './layouts/NavigationMarketingBox'
import { useUI } from '@components/ui'

const Navbar: FunctionComponent<{ data: AcfOptionsHeader }> = (props) => {
  const {
    data: { navigationLayouts, alertBanner, navigation, yourAccount },
  } = props

  const ref = useRef<HTMLDivElement>(null)
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const [openSubNav, setOpenSubNav] = useState<false | number>(false)
  const isMobile = useIsMobile()
  const { openSidebar } = useUI()

  useEffect(() => {
    if (ref.current && isMobile) {
      if (navOpen || openSubNav) disableBodyScroll(ref.current)
      else enableBodyScroll(ref.current)
    } else clearAllBodyScrollLocks()
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [navOpen, openSubNav, isMobile])

  useEffect(() => {
    setOpenSubNav(false)
  }, [navOpen])

  const handleClick = () => {
    if (openSubNav === 100 || openSubNav === 101) {
      setOpenSubNav(false)
      setNavOpen(false)
    } else {
      setNavOpen((prev) => !prev)
    }
  }

  const openCart = () => {
    openSidebar()
  }

  return (
    <div
      className={cn(
        isMobile && (navOpen || openSubNav) && 'h-screen overflow-auto',
        'md:h-auto overflow-auto md:overflow-visible'
      )}
      ref={ref}
    >
      {alertBanner?.active && <AlertBar {...alertBanner} />}
      <NavbarRoot className="bg-white">
        <div className="relative">
          <div className="container">
            <div className="flex flex-row justify-center align-center py-20">
              <div className="flex items-center flex-1">
                <Link href="/">
                  <a className={styles.logo} aria-label="Logo">
                    <Logo className="" />
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
              <div className="flex justify-end items-center flex-1 md:space-x-8 w-full">
                <div>
                  <ArrowCTA
                    className="md:mr-60 mr-15 whitespace-nowrap"
                    color="blue"
                    subnav
                    orientation={isMobile && openSubNav == 100 ? 'up' : 'down'}
                    onClick={() => {
                      openSubNav !== 100 ? setOpenSubNav(100) : handleClick()
                    }}
                  >
                    Expert Help
                  </ArrowCTA>
                  <div
                    className={cn(
                      'absolute left-0 md:-mt-20 mt-10',
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
                      'flex justify-center items-center cursor-pointer mr-5 md:mr-50'
                    )}
                    onClick={() => {
                      openSubNav !== 101 ? setOpenSubNav(101) : handleClick()
                    }}
                  >
                    <span className="mr-10 whitespace-nowrap hidden md:block">
                      Your Account
                    </span>
                    <Account />
                  </div>

                  <div
                    className={cn(
                      'absolute left-0 md:-mt-20 mt-10',
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
                  onClick={openCart}
                >
                  <span className="mr-10 hidden md:block">Cart</span>
                  <Cart />
                  <div
                    className={cn(
                      styles.cartItems,
                      'flex justify-center items-center md:h-25 md:w-25 bg-yellow rounded-full absolute md:left-60 md:-top-15 -top-8 right-0'
                    )}
                  >
                    15
                  </div>
                </div>
                {/* <UserNav /> */}
              </div>
            </div>
            <div
              className={cn(
                styles.mobileShadow,
                (openSubNav === 100 || openSubNav === 101) && 'w-screen'
              )}
            />
            <div
              className={cn(
                'flex-1 md:hidden flex justify-between pb-10',
                navOpen && '!pb-0'
              )}
            >
              <div className="relative flex justify-center items-center z-50">
                <Hamburger
                  isClosed={navOpen || openSubNav}
                  className="cursor-pointer mr-20"
                  onClick={handleClick}
                />
              </div>
              {isMobile && !navOpen && (
                <Input
                  size="small"
                  className={cn(styles.search, 'w-full')}
                  type="search"
                  icon="search"
                  variant="blue-outline"
                  placeholder="What do your pets need today?"
                />
              )}
              {/* <Searchbar /> */}
            </div>
          </div>
          <div className={cn(styles.shadow, '')}></div>
        </div>

        <nav
          className={cn(
            !navOpen && 'max-h-0 overflow-hidden pt-0',
            (navOpen || !isMobile) && ' md:py-20 py-10 max-h-[200vh]',
            'duration-300 ease container',
            navOpen && 'pb-100'
          )}
        >
          <ul className="md:flex justify-around">
            {navigation.map((nav, index) => {
              const {} = nav
              if (nav?.link) {
                return (
                  <li
                    key={nav.title}
                    className={cn(
                      styles.specialsLink,
                      'md:mx-20 md:p-0 py-10 md:border-none border-y-[0.5px] border-greyscale-4 md:w-auto w-full flex justify-between'
                    )}
                  >
                    <Link color="red" href={nav.link.url}>
                      {nav.link.title}
                    </Link>
                    <div className={cn(styles.icon, 'md:hidden')}>
                      <ChevronUp />
                    </div>
                  </li>
                )
              }
              return (
                <li
                  key={nav.title}
                  className="md:mx-20 md:p-0 py-10 md:border-none border-t-[0.5px] border-greyscale-4"
                >
                  <ArrowCTA
                    className="flex"
                    subnav
                    color={isMobile ? 'blue' : 'black'}
                    orientation={
                      isMobile && !(openSubNav === index) ? 'right' : 'down'
                    }
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
                      openSubNav === index && styles.openSubNav,
                      openSubNav === index && '-mb-10'
                    )}
                  >
                    {renderNavigationLayouts(nav.navigationLayouts[0])}
                  </div>
                </li>
              )
            })}
          </ul>
          <div>
            {/*console.log(
              'data',
              props.data.navigation[3].navigationLayouts[0].video.thumbnail
              console.log(nav.navigationLayouts[0].marketingBox)
            )*/}
            {props.data.navigation.map((nav, index) => {
              if (
                (openSubNav || openSubNav === 0) &&
                index === openSubNav &&
                isMobile
              ) {
                if (!nav.navigationLayouts[0].marketingBox) {
                  return
                }
                return (
                  <NavigationMarketingBox
                    module={nav.navigationLayouts[0].marketingBox}
                  />
                )
              }
            })}
          </div>
        </nav>
      </NavbarRoot>
    </div>
  )
}

export default Navbar
