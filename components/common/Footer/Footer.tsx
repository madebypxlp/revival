import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import YouTube from '@components/icons/YouTube'
import Link from '@components/ui/Link/Link'
import { AcfOptionsFooter } from 'framework/wordpress/interfaces/footer'
import Image from 'next/image'
import styles from './Footer.module.scss'
import FooterActions from './FooterActions'
import FooterNav from './FooterNav'
import FooterNewsletter from './FooterNewsletter'

const Footer = ({ data }: { data: AcfOptionsFooter }) => {
  const { copyright, logo, social } = data

  return (
    <footer className={styles.root}>
      <FooterActions data={data} />

      <div className="container py-40 md:pt-90 md:pb-60 text-blue">
        <div className="default-grid md:mb-30">
          <div className="col-span-2 md:col-span-4 md:row-span-2 mb-40 md:mb-0">
            <FooterNewsletter data={data} />
          </div>
          <FooterNav data={data} />
        </div>

        <div className="default-grid">
          <div className="col-span-2 md:col-span-6 mb-35">
            <div className="flex gap-16 text-red justify-center md:justify-start">
              {social?.facebook && (
                <Link href={social.facebook} target="_blank">
                  <Facebook className="w-35" />
                </Link>
              )}
              {social?.instagram && (
                <Link href={social.instagram} target="_blank">
                  <Instagram className="w-35" />
                </Link>
              )}
              {social?.youtube && (
                <Link href={social.youtube} target="_blank">
                  <YouTube className="w-35" />
                </Link>
              )}
            </div>
          </div>
          <div className="col-span-2 mb-15 md:mb-0 md:col-span-3 md:col-start-11 md:row-span-2 text-center md:text-right">
            {logo?.sourceUrl && (
              <Image
                alt={logo?.altText}
                src={logo?.sourceUrl}
                width={200}
                height={65}
                objectFit="contain"
              />
            )}
          </div>
          <div className="col-span-2 md:col-span-6 typo-legal-text text-black text-center md:text-left">
            <span>
              &copy; {new Date().getFullYear()} {copyright?.text}
            </span>
            {!!copyright?.links?.length &&
              copyright.links.map(({ link }) => (
                <Link
                  className="!typo-legal-text inline-block ml-10"
                  link={link}
                />
              ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
