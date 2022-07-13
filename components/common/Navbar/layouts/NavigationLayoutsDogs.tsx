import { FunctionComponent } from 'react'
import cn from 'classnames'
import { NavigationLayoutsDogs } from 'framework/wordpress/interfaces/header'
import NavigationMarketingBox from './NavigationMarketingBox'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'
import { useIsMobile } from '@commerce/utils/hooks'
import styles from '../Navbar.module.scss'

const Navbar: FunctionComponent<{ module: NavigationLayoutsDogs }> = ({
  module,
}) => {
  const { quickLinks, links, marketingBox } = module

  return (
    <div
      className={
        (cn(styles.NavigationLayoutsDogs),
        'overflow-hidden container pl-0 md:pl-20 xl:pl-85')
      }
    >
      <div className="default-grid md:py-60 relative">
        <div
          className={cn(
            styles.quicklinkContainer,
            'md:flex flex-col md:col-span-2 hidden'
          )}
        >
          {quickLinks.map((link, index) => {
            if (index === quickLinks.length - 1) {
              return (
                <ArrowCTA color="blue" orientation="right" link={link.link} />
              )
            }
            return (
              <a className={cn(styles.quicklink)} href={link.link.url}>
                {parse(link.link.title)}
              </a>
            )
          })}
        </div>
        <div className="col-start-1 md:col-start-3 md:col-span-8 grid md:grid-rows-9 md:grid-flow-col gap-x-20 col-span-full grid-cols-2 md:grid-cols-8">
          {links.map((link) => {
            return (
              <a
                className={cn(styles.link, 'truncate col-span-1 md:col-span-2')}
                href={link.link.url}
              >
                {parse(link.link.title)}
              </a>
            )
          })}
        </div>
        <div className="col-start-1 md:col-start-3 md:col-span-8 grid md:grid-rows-9 md:grid-flow-col gap-x-20 col-span-full grid-cols-2 md:grid-cols-8">
          {links.map((link) => (
            <a
              key={link.link.title}
              className={cn(styles.link, 'truncate col-span-1 md:col-span-2')}
              href={link.link.url}
            >
              {parse(link.link.title)}
            </a>
          ))}
        </div>
        <div className={styles.marketingBoxContainer}>
          <NavigationMarketingBox module={marketingBox} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
