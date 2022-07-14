import { FunctionComponent } from 'react'
import cn from 'classnames'
import { NavigationLayoutsVaccines } from 'framework/wordpress/interfaces/header'
import NavigationMarketingBox from './NavigationMarketingBox'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import styles from '../Navbar.module.scss'
const Navbar: FunctionComponent<{ module: NavigationLayoutsVaccines }> = ({
  module,
}) => {
  const {} = module
  const { quickLinks, columns, marketingBox } = module

  return (
    <div
      className={cn(
        styles.NavigationLayoutsVaccines,
        'container py-0 px-0 md:px-20 xl:px-85 overflow-hidden'
      )}
    >
      <div className="default-grid md:py-60 py-20 relative">
        <div
          className={cn(
            styles.quicklinkContainer,
            'md:flex flex-col col-span-2 pt-10 hidden'
          )}
        >
          {quickLinks.map((link) => {
            return (
              <ArrowCTA
                className="mb-20 "
                color="blue"
                orientation="right"
                link={link.link}
              />
            )
          })}
        </div>
        {columns.map((column) => {
          return (
            <div
              className={cn(
                'col-span-1 md:col-span-2 flex flex-col',
                !column.title && 'pt-40'
              )}
            >
              {column?.title && (
                <h5 className={cn(styles.quicklink)}>{column.title}</h5>
              )}
              {column.links.map((link) => {
                return (
                  <a className={cn(styles.link, '')} href={link.link.url}>
                    {link.link.title}
                  </a>
                )
              })}
              {column.cta && (
                <ArrowCTA color="blue" orientation="right" link={column.cta} />
              )}
            </div>
          )
        })}
        <div className={styles.marketingBoxContainer}>
          <NavigationMarketingBox module={marketingBox} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
