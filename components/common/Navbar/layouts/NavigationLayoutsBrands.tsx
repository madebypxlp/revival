import { FunctionComponent } from 'react'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import cn from 'classnames'
import { NavigationLayoutsBrands } from 'framework/wordpress/interfaces/header'
import Image from 'next/image'
import { useIsMobile } from '@commerce/utils/hooks'
import styles from '../Navbar.module.scss'

const Navbar: FunctionComponent<{ module: NavigationLayoutsBrands }> = ({
  module,
}) => {
  const { ourBrands, headline, featuredBrands, link } = module
  const isMobile = useIsMobile()

  return (
    <div
      className={cn(
        styles.NavigationLayoutsBrands,
        'container px-0 pb-10 pt-10 md:p-20'
      )}
    >
      <div className="default-grid">
        <div className="col-span-full md:col-span-3 pt-32 relative md:pl-0 pl-20 pb-10 md:pb-0">
          <span className="absolute bg-blue-default top-0 bottom-0 right-0 md:-left-85 inset-0" />
          <h4 className="md:mb-30 mb-25 text-white relative mt-30">
            {headline}
          </h4>

          {ourBrands.map((brand) => (
            <a
              key={brand.uri}
              href={brand.uri}
              className="bg-white py-21 px-18 mb-20 relative w-250 h-105 flex justify-center items-center rounded-15 overflow-hidden"
            >
              {brand.featuredImage?.node && (
                <Image
                  src={brand.featuredImage.node.sourceUrl}
                  width={brand.featuredImage.node.mediaDetails.width}
                  height={brand.featuredImage.node.mediaDetails.height}
                  alt={brand.featuredImage.node.altText}
                />
              )}
            </a>
          ))}
        </div>
        <div className="md:col-start-5 md:col-span-8 col-span-full grid grid-cols-8 gap-x-18 gap-y-20 md:py-40 py-30">
          {featuredBrands.map((brand) => (
            <a
              key={brand.uri}
              href={brand.uri}
              className="border-[1.5px] border-[#000000] border-opacity-30 rounded-15 col-span-4 md:col-span-2 flex justify-center items-center md:h-90 h-65"
            >
              {brand.featuredImage?.node && (
                <Image
                  alt={brand.featuredImage.node.altText}
                  src={brand.featuredImage.node.sourceUrl}
                  width={
                    brand.featuredImage.node.mediaDetails.width /
                    (isMobile ? 1.711 : 1)
                  }
                  height={
                    brand.featuredImage.node.mediaDetails.height /
                    (isMobile ? 1.711 : 1)
                  }
                />
              )}
            </a>
          ))}
          <div className="flex justify-center items-center md:col-span-2 col-span-4 md:h-90 h-65">
            <ArrowCTA
              className="h-full p-0"
              subnav
              link={link}
              color="blue"
              orientation="right"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
