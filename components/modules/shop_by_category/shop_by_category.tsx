import React, { FunctionComponent } from 'react'
import styles from './shop_by_category.module.scss'
import IShopByCategory from './shop_by_category.interface'

const ShopByCategoryModule: FunctionComponent<{ module: IShopByCategory }> = ({
  module,
}) => (
  <div className={`${styles.root} container`}>
    Shopbycategory Module
    {console.log(module)}
  </div>
)

export default ShopByCategoryModule
