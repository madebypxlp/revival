import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useUI } from '@components/ui/context'
import { Navbar, Footer } from '@components/common'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Sidebar } from '@components/ui'
import CartSidebarView from '@components/cart/CartSidebarView'
import { CommerceProvider } from '@framework'
import { useIsMobile } from '@commerce/utils/hooks'
import { AcfOptionsHeader } from 'framework/wordpress/interfaces/header'
import { AcfOptionsFooter } from 'framework/wordpress/interfaces/footer'
import s from './Layout.module.scss'

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
  const { displaySidebar, closeSidebar } = useUI()
  const isMobile = useIsMobile()
  const { locale = 'en-us' } = useRouter()

  const footerObj = footer || (pageProps?.footer as AcfOptionsFooter)
  const headerObj = header || (pageProps?.header as AcfOptionsHeader)
  return (
    <CommerceProvider locale={locale}>
      {true && process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <div className="devGrid w-full h-full container">
            <div className="default-grid h-full">
              {Array(isMobile ? 2 : 12)
                .fill({})
                .map(() => (
                  <div
                    className="col col-span-1"
                    key={new Date().getTime() + Math.random()}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
      <div className={cn(s.root)}>
        {headerObj && <Navbar data={headerObj} />}
        <main className="fit">{children}</main>
        {footerObj && <Footer data={footerObj} />}
        <Sidebar open={displaySidebar} onClose={closeSidebar}>
          <CartSidebarView />
        </Sidebar>
      </div>
    </CommerceProvider>
  )
}

export default Layout
