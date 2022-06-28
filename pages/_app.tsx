import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import '../styles/main.scss'
import { useIsMobile } from '@commerce/utils/hooks'

const Noop: FC = ({ children }) => <>{children}</>

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/a11y/a11y.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          {/* @ts-expect-error */}
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
