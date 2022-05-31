import React, { FunctionComponent } from 'react'
import styles from './ProductCategoryContentTabs.module.scss'
import IProductCategoryContentTabs from './ProductCategoryContentTabs.interface'

const ProductCategoryContentTabsModule:FunctionComponent<{ module: IProductCategoryContentTabs }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Productcategorycontenttabs Module
    </div>
  )
}

export default ProductCategoryContentTabsModule
