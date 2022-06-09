import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './OurBrands.module.scss'
import IOurBrands from './OurBrands.interface'

const OurBrandsModule: FunctionComponent<{ module: IOurBrands }> = ({
  module,
}) => {
  console.log(module)
  return (
    <div className={`${styles.root} container pt-100`}>
      {module.rows.map((row, idx) => (
        <div key={idx} className={`default-grid mb-90`}>
          <div className="col-span-12">
            {row.headline && (
              <h2 className={styles.headline}>{row.headline}</h2>
            )}
          </div>
          {row.brands.map((brand, brandIdx) => (
            <div
              key={brandIdx}
              className={
                row.brands.length > 3 ? `col-span-3 my-10` : 'col-span-4 my-10'
              }
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
