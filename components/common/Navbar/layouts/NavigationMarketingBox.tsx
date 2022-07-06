import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationMarketingBox } from 'framework/wordpress/interfaces/header'
import UIImage from 'next/image'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'

const NavigationMarketingBox: FunctionComponent<{
  module: NavigationMarketingBox
}> = ({ module }) => {
  const { title, image, link, alignment } = module

  return (
    <div className={(cn(styles.NavigationMarketingBox), ' overflow-hidden')}>
      <UIImage
        src={image.sourceUrl}
        alt={image.altText}
        width={image.mediaDetails.width}
        height={image.mediaDetails.height}
      />
      {alignment === 'topLeft' && (
        <div className="flex justify-start items-start flex-col absolute top-40 left-25 z-10 w-[18rem]">
          <h3 className={cn(styles.marketingBoxHeading, 'text-white mb-18')}>
            {title}
          </h3>
          <ArrowCTA color="white" orientation="right" link={link} />
        </div>
      )}
      {alignment === 'topLeft' && (
        <div className="absolute bg-red w-[26.1rem] h-[26.1rem] -top-50 -left-30 rounded-full " />
      )}

      {alignment === 'bottomLeft' && (
        <div className="flex justify-start items-start flex-col absolute bottom-40 left-25 z-10 w-[18rem]">
          <h3 className={cn(styles.marketingBoxHeading, 'text-white mb-18')}>
            {title}
          </h3>
          <ArrowCTA color="white" orientation="right" link={link} />
        </div>
      )}
      {alignment === 'bottomLeft' && (
        <div className="absolute bg-red w-[26.1rem] h-[26.1rem] -bottom-50 -left-30 rounded-full " />
      )}
    </div>
  )
}

export default NavigationMarketingBox
