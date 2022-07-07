import React, { FunctionComponent } from 'react'
import styles from './ShopByCategory.module.scss'
import IShopByCategory from './ShopByCategory.interface'

import Image from 'next/image'
import Link from 'next/link'
import { useIsMobile } from '@commerce/utils/hooks'

const ShopByCategoryModule: FunctionComponent<{ module: IShopByCategory }> = ({
  module,
}) => {
  const { headline, categories, fieldGroupName } = module
  return (
    <div className={`${styles.root} container mb-20 md:mb-70`}>
      <div className="default-grid">
        <h4 className="typo-h4 col-span-2 mb-70 text-blue-default md:col-span-full md:mb-55">
          {headline}
        </h4>
        {categories.map((category, idx) => {
          return (
            <div className="col-span-1 md:col-span-3 lg:col-span-2">
              <Link href={category.link.url}>
                <a className="flex flex-col items-center justify-center">
                  <div className={styles.categoryImageContainer}>
                    {category?.image?.sourceUrl && (
                      <Image
                        src={category.image.sourceUrl}
                        alt={category.image.altText}
                        layout={'fill'}
                        objectFit={'cover'}
                      />
                    )}
                  </div>
                  <span className="typo-large-paragraph hover mb-30">
                    {category.link.title}
                  </span>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShopByCategoryModule
