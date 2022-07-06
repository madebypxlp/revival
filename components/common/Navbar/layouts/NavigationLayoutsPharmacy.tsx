import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import { NavigationLayoutsPharmacy } from 'framework/wordpress/interfaces/header'
import parse from 'html-react-parser'
import Image from 'next/image'

const Navbar: FunctionComponent<{ module: NavigationLayoutsPharmacy }> = ({
  module,
}) => {
  const { quickLinks, listOfLinks, cta, video } = module

  return (
    <div
      className={cn(
        styles.NavigationLayoutsPharmacy,
        'container overflow-hidden'
      )}
    >
      <div className="default-grid py-60 relative">
        <div
          className={cn(styles.quicklinkContainer, 'flex flex-col col-span-2')}
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
        <div className="col-start-3 col-span-4 grid grid-rows-9 grid-flow-col gap-x-20 grid-auto-row-min">
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
        <div className="col-start-7 col-span-4">
          <Image
            src={video.thumbnail.sourceUrl}
            width={video.thumbnail.mediaDetails.width}
            height={video.thumbnail.mediaDetails.height}
          />
        </div>
        <div className="col-start-11 col-span-2 flex flex-col h-full pr-15 pt-35">
          <h5 className="mb-10">{video.headline}</h5>
          <p className={cn(styles.videoText, 'mb-30')}>{video.copy}</p>
          <ArrowCTA link={video.link} color="blue" orientation="right" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
