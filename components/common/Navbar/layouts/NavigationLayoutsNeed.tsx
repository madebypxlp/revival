import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsNeed } from 'framework/wordpress/interfaces/header'
import Link from 'next/link'
import Button from '@components/ui/Button/Button'
import { useIsMobile } from '@commerce/utils/hooks'

const Navbar: FunctionComponent<{ module: NavigationLayoutsNeed }> = ({
  module,
}) => {
  const { quickLinks, ctaLink, chipLinks } = module
  const isMobile = useIsMobile()
  return (
    <div className={cn(styles.NavigationLayoutsNeed, 'pt-10 md:pt-0 ')}>
      <div className="container default-grid bg-blue py-30 md:py-70">
        <div
          className={cn(
            styles.LinkContainer,
            'col-span-2 hidden md:flex flex-col'
          )}
        >
          {quickLinks.map((link, idx) => {
            return (
              <Link href={link.link.url} key={link.link.title + idx}>
                <a className="typo-quicklink text-white">{link.link.title}</a>
              </Link>
            )
          })}
        </div>
        <div className="flex col-span-2 flex-wrap justify-center items-center md:justify-start md:col-span-9 md:items-start md:content-start ">
          {chipLinks.map((clink, idx) => {
            return (
              <Button
                className="mx-5 my-5 md:mx-10 md:my-10"
                key={clink.link.title + idx}
                outline={!clink.highlighted}
                color={clink.highlighted ? 'yellow' : 'white'}
                variant={isMobile ? 'small' : 'large'}
                type="default"
                href={clink.link.url}
              >
                {clink.link.title}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
