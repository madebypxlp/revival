import { useIsMobile } from '@commerce/utils/hooks'
import Link from '@components/ui/Link/Link'
import { AcfOptionsFooter } from 'framework/wordpress/interfaces/footer'
import Image from 'next/image'
import styles from './Footer.module.scss'

const FooterActions = ({ data }: { data: AcfOptionsFooter }) => {
  const { actions } = data
  const isMobile = useIsMobile()

  return (
    <div className="bg-blue text-white py-40 md:py-30">
      <div className="container text-center md:text-left">
        <div className="md:default-grid">
          <div className="col-span-4 mb-20 md:mb-0">
            {actions?.headline && (
              <h4 className="typo-h4 mb-10">{actions.headline}</h4>
            )}
            {actions?.copy && (
              <p className="typo-small-paragraph max-w-[23em] mx-auto lg:mx-0">
                {actions.copy}
              </p>
            )}
          </div>
          {!!actions?.actions?.length && (
            <div className="inline-block text-left col-span-8 md:flex flex-wrap items-center">
              {actions.actions.map((action) => {
                return (
                  <Link
                    key={action.link.title}
                    className={styles.actionLink}
                    link={action.link}
                  >
                    {action?.icon?.sourceUrl && (
                      <span>
                        <Image
                          alt={action.icon.altText}
                          width={isMobile ? 20 : 40}
                          height={isMobile ? 20 : 40}
                          objectFit="contain"
                          objectPosition="center center"
                          src={action.icon.sourceUrl}
                        />
                      </span>
                    )}
                    {action.link.title}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FooterActions
