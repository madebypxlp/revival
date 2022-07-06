import { FunctionComponent } from 'react'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsBrands } from 'framework/wordpress/interfaces/header'
import Image from 'next/image'

const Navbar: FunctionComponent<{ module: NavigationLayoutsBrands }> = ({
  module,
}) => {
  const { ourBrands, headline, featuredBrands, link } = module

  return (
    <div className={cn(styles.NavigationLayoutsBrands, 'container')}>
      <div className="default-grid">
        <div className="col-span-3 pt-32 relative">
          <span className="absolute bg-blue-default top-0 bottom-0 right-0 -left-85 " />
          <h4 className="mb-30 text-white relative mt-30">{headline}</h4>

          {ourBrands.map((brand) => {
            return (
              <a
                href={brand.uri}
                className="bg-white py-21 px-18 mb-20 relative w-250 h-105 flex justify-center items-center rounded-15 overflow-hidden"
              >
                {
                  <Image
                    src={brand.featuredImage.node.sourceUrl}
                    width={brand.featuredImage.node.mediaDetails.width}
                    height={brand.featuredImage.node.mediaDetails.height}
                  />
                }
              </a>
            )
          })}
        </div>
        <div className="col-start-5 col-span-8 grid grid-cols-8 gap-x-18 gap-y-20 py-40">
          {featuredBrands.map((brand) => {
            return (
              <a
                href={brand.uri}
                className="border-[1.5px] border-[#000000] border-opacity-30 rounded-15 col-span-2 flex justify-center items-center h-90"
              >
                {brand.featuredImage?.node && (
                  <Image
                    src={brand.featuredImage.node.sourceUrl}
                    width={brand.featuredImage.node.mediaDetails.width}
                    height={brand.featuredImage.node.mediaDetails.height}
                  />
                )}
              </a>
            )
          })}
          <div className="flex justify-center items-center col-span-2 h-90">
            <ArrowCTA
              className="h-full p-0"
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
