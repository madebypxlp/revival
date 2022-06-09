import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './OurBrands.module.scss'
import IOurBrands from './OurBrands.interface'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'

const OurBrandsModule: FunctionComponent<{ module: IOurBrands }> = ({
  module,
}) => {
  return (
    <div className={`${styles.root} container pt-40 md:pt-100`}>
      {module.rows.map((row, idx) => (
        <div key={idx} className={`default-grid pb-35 md:pb-90`}>
          <div className="col-span-2 md:col-span-12 flex flex-col md:flex-row md:justify-between items-start md:items-end mb-15 md:mb-35 pr-40 md:pr-10">
            {row.headline && (
              <span className={styles.headline}>{row.headline}</span>
            )}
            {row.brands.length > 3 && (
              <div className="relative mt-20 md:mt-0">
                <ArrowCTA color="blue" orientation="right" href="">
                  Shop All
                </ArrowCTA>
              </div>
            )}
          </div>
          {row.brands.map((brand, brandIdx) => (
            <div
              key={brandIdx}
              className={`${
                row.brands.length > 3
                  ? 'md:col-span-3 col-span-1'
                  : 'md:col-span-4 col-span-2'
              } my-5 md:my-10`}
            >
              <a href={brand.url} target="_blank" className={styles.brandLink}>
                <Image
                  src={brand.brandLogo.sourceUrl}
                  alt={brand.brandLogo.altText}
                  layout={'responsive'}
                  width={452}
                  height={230}
                />
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default OurBrandsModule
