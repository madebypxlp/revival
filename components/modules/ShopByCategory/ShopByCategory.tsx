import React, { FunctionComponent } from 'react'
import styles from './ShopByCategory.module.scss'
import IShopByCategory from './ShopByCategory.interface'

const ShopByCategoryModule:FunctionComponent<{ module: IShopByCategory }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Shopbycategory Module
    </div>
  )
}

export default ShopByCategoryModule
