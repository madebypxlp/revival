import { useIsMobile } from '@commerce/utils/hooks'

import Link from '@components/ui/Link/Link'
import Image from 'next/image'
import Footer from './Footer.interface'
import styles from './Footer.module.scss'
import FooterActions from './FooterActions'
import FooterNewsletter from './FooterNewsletter'

const Footer = ({ data }: { data: Footer }) => {
  const { copyright, logo, nav, social } = data
  const isMobile = useIsMobile()

  return (
    <footer className={styles.root}>
      <FooterActions data={data} />

      <div className="container py-40 md:pt-90 md:pb-60 text-blue">
        <div className="default-grid">
          <div className="col-span-2 md:col-span-4 md:row-span-2 mb-40 md:mb-0">
            <FooterNewsletter data={data} />
          </div>

          {!!nav?.length &&
            nav.map((group) => {
              const { primaryHeadline, primaryElementLink, items } = group
              const primaryProps = {
                className: styles.navLink + ' font-bold',
              }
              return (
                <div className="md:col-span-2 mb-30">
                  {primaryElementLink?.url ? (
                    <Link link={primaryElementLink} {...primaryProps}>
                      {primaryHeadline || primaryElementLink?.title}
                    </Link>
                  ) : (
                    <span {...primaryProps}>{primaryHeadline}</span>
                  )}

                  {!!items?.length &&
                    items.map((item) => {
                      const { link, highlight } = item

                      return (
                        <Link
                          key={link?.title}
                          link={link}
                          className={styles.navLink + ' !font-normal'}
                          color={highlight ? 'red' : undefined}
                        />
                      )
                    })}
                </div>
              )
            })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
