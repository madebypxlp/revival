import cn from 'classnames'
import dynamic from 'next/dynamic'
import s from './Layout.module.scss'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useUI } from '@components/ui/context'
import { Navbar, Footer } from '@components/common'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Sidebar, Modal, LoadingDots } from '@components/ui'
import CartSidebarView from '@components/cart/CartSidebarView'

import LoginView from '@components/auth/LoginView'
import { CommerceProvider } from '@framework'
import Button from '@components/ui/Button/Button'
import { useIsMobile } from '@commerce/utils/hooks'
import AlertBar from '@components/ui/AlertBar/AlertBar'
import { AcfOptionsHeader } from 'framework/wordpress/interfaces/header'
import { AcfOptionsFooter } from 'framework/wordpress/interfaces/footer'

const Loading = () => (
  <div className="w-100 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
  loading: () => <Loading />,
})

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  {
    loading: () => <Loading />,
  }
)

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  loading: () => <Loading />,
})

const Layout: FC<any> = ({
  children,
  footer,
  header,
  pageProps,
}: {
  children: any
  footer: any
  header: AcfOptionsHeader
  pageProps: any
}) => {
  const { displaySidebar, displayModal, closeSidebar, closeModal, modalView } =
    useUI()
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const isMobile = useIsMobile()
  const { locale = 'en-us' } = useRouter()

  const footerObj = footer || (pageProps.footer as AcfOptionsFooter)
  const headerObj = header || (pageProps.header as AcfOptionsHeader)
  return (
    <CommerceProvider locale={locale}>
      {true && process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <div className="devGrid w-full h-full container">
            <div className={'default-grid h-full'}>
              {Array(isMobile ? 2 : 12)
                .fill({})
                .map(() => {
                  return (
                    <div
                      className={'col col-span-1'}
                      key={new Date().getTime() + Math.random()}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      )}
      <div className={cn(s.root)}>
        {headerObj?.alertBanner && <AlertBar {...headerObj.alertBanner} />}
        {/* <Navbar />  */}
        <main className="fit">{children}</main>
        {footerObj && <Footer data={footerObj} />}

        <Sidebar open={displaySidebar} onClose={closeSidebar}>
          <CartSidebarView />
        </Sidebar>
        {/*
        <FeatureBar
          title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
          hide={acceptedCookies}
          action={
            <Button
              color="white"
              type="default"
              variant="small"
              className="mx-5"
              onClick={() => onAcceptCookies()}
            >
              Accept cookies
            </Button>
          }
        />
        */}
      </div>
    </CommerceProvider>
  )
}

export default Layout
