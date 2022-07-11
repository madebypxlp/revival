import Link from '@components/ui/Link/Link'
import { AcfOptionsFooter } from 'framework/wordpress/interfaces/footer'
import styles from './Footer.module.scss'

const FooterNav = ({ data }: { data: AcfOptionsFooter }) => {
  const { nav } = data

  if (!nav?.length) return null

  return (
    <>
      {nav.map((group) => {
        const { primaryHeadline, primaryElementLink, items } = group
        const primaryProps = {
          className: `${styles.navLink} inline-block font-bold`,
        }

        return (
          <div key={primaryHeadline} className="md:col-span-2 mb-30">
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
                    className={`${styles.navLink} !font-normal`}
                    color={highlight ? 'red' : undefined}
                  />
                )
              })}
          </div>
        )
      })}
    </>
  )
}

export default FooterNav
