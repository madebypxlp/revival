import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationMarketingBox } from 'framework/wordpress/interfaces/header'
import UIImage from 'next/image'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import { useIsMobile } from '@commerce/utils/hooks'

const NavigationMarketingBox: FunctionComponent<{
  module: NavigationMarketingBox
}> = ({ module }) => {
  const { title, image, link, alignment } = module
  const isMobile = useIsMobile()

  return (
    <div
      className={
        (cn(styles.NavigationMarketingBox),
        'overflow-hidden relative h-full flex justify-center items-center')
      }
    >
      <div className="aspect-[335/202] md:aspect-[300/500] w-full">
        <UIImage
          src={image.sourceUrl}
          alt={image.altText}
          layout="fill"
          objectFit="cover"
          objectPosition="center 75%"
        />
      </div>

      {alignment === 'topLeft' && (
        <div className="flex justify-start items-start flex-col absolute top-40 left-25 z-10 w-[18rem]">
          <h3 className={cn(styles.marketingBoxHeading, 'text-white mb-18')}>
            {title}
          </h3>
          <ArrowCTA color="white" orientation="right" link={link} />
        </div>
      )}
      {alignment === 'topLeft' && (
        <div className="absolute bg-red md:w-[26.1rem] md:h-[26.1rem] w-[21rem] h-[21rem] -top-50 -left-30 rounded-full " />
      )}

      {alignment === 'bottomLeft' && (
        <div className="flex justify-start items-start flex-col absolute md:bottom-40 bottom-30 left-25 z-10 w-[18rem]">
          <h3 className={cn(styles.marketingBoxHeading, 'text-white mb-18')}>
            {title}
          </h3>
          <ArrowCTA color="white" orientation="right" link={link} />
        </div>
      )}
      {alignment === 'bottomLeft' && (
        <div className="absolute bg-red md:w-[26.1rem] md:h-[26.1rem] w-[21rem] h-[21rem] -bottom-50 -left-30 rounded-full " />
      )}
    </div>
  )
}

export default NavigationMarketingBox
