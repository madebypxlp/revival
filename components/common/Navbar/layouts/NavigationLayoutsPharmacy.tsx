import { FunctionComponent } from 'react'
import cn from 'classnames'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import { NavigationLayoutsPharmacy } from 'framework/wordpress/interfaces/header'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from '../Navbar.module.scss'

const Navbar: FunctionComponent<{ module: NavigationLayoutsPharmacy }> = ({
  module,
}) => {
  const { quickLinks, listOfLinks, cta, video } = module

  return (
    <div
      className={cn(
        styles.NavigationLayoutsPharmacy,
        'container md:px-20 px-0 overflow-hidden md:pb-0 pb-10'
      )}
    >
      <div className="default-grid md:py-60 py-20 relative">
        <div
          className={cn(
            styles.quicklinkContainer,
            'md:flex flex-col col-span-2 hidden'
          )}
        >
          {quickLinks.map((link, index) => {
            return (
              <a className={cn(styles.quicklink)} href={link.link.url}>
                {parse(link.link.title)}
              </a>
            )
          })}
          <ArrowCTA color="blue" orientation="right" link={cta} />
        </div>
        <div className="md:col-start-3 col-span-2 col-start-1 md:col-span-4 grid grid-rows-9 grid-flow-col gap-x-20 grid-auto-row-min">
          {listOfLinks.map((link) => {
            return (
              <a
                className={cn(styles.link, 'truncate col-span-2')}
                href={link.link.url}
              >
                {parse(link.link.title)}
              </a>
            )
          })}
        </div>
        <div className="md:col-start-7 md:col-span-4 col-span-2 col-start-1 hidden md:block">
          <Image
            src={video.thumbnail.sourceUrl}
            width={video.thumbnail.mediaDetails.width}
            height={video.thumbnail.mediaDetails.height}
            alt=""
          />
        </div>
        <div className="md:col-start-11 col-span-2 flex flex-col h-full pr-15 md:pt-35">
          <h5 className="mb-10">{video.headline}</h5>
          <p className={cn(styles.videoText, 'md:mb-30 mb-10')}>{video.copy}</p>
          <ArrowCTA link={video.link} color="blue" orientation="right" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
