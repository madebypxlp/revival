import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsDogs } from 'framework/wordpress/interfaces/header'
import NavigationMarketingBox from './NavigationMarketingBox'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'

const Navbar: FunctionComponent<{ module: NavigationLayoutsDogs }> = ({
  module,
}) => {
  const { quickLinks, links, marketingBox } = module

  return (
    <div
      className={
        (cn(styles.NavigationLayoutsDogs), 'overflow-hidden container')
      }
    >
      <div className="default-grid py-60 relative">
        <div
          className={cn(styles.quicklinkContainer, 'flex flex-col col-span-2')}
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
        <div className="col-start-3 col-span-8 grid grid-rows-9 grid-flow-col gap-x-20">
          {links.map((link) => {
            return (
              <a className={cn(styles.link, 'truncate')} href={link.link.url}>
                {parse(link.link.title)}
              </a>
            )
          })}
        </div>
        <div className="absolute top-0 -right-85 bottom-0 overflow-hidden">
          <NavigationMarketingBox module={marketingBox} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
