import { FunctionComponent } from 'react'
import cn from 'classnames'
import { NavigationLayoutsDogs } from 'framework/wordpress/interfaces/header'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'
import NavigationMarketingBox from './NavigationMarketingBox'
import styles from '../Navbar.module.scss'

const Navbar: FunctionComponent<{ module: NavigationLayoutsDogs }> = ({
  module,
}) => {
  const { quickLinks, links, marketingBox } = module

  return (
    <div
      className={
        (cn(styles.NavigationLayoutsDogs), 'container pl-0 md:pl-20 xl:pl-85')
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
                <ArrowCTA
                  color="blue"
                  orientation="right"
                  link={link.link}
                  key={link.link.title}
                />
              )
            }
            return (
              <a
                key={link.link.title}
                className={cn(styles.quicklink)}
                href={link.link.url}
              >
                {parse(link.link.title)}
              </a>
            )
          })}
        </div>
        <div className={styles.NavigationLayoutsDogsColumn}>
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
        <div className={styles.NavigationLayoutsDogsColumn}>
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
