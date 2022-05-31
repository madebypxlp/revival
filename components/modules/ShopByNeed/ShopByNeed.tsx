import React, { FunctionComponent } from 'react'
import styles from './ShopByNeed.module.scss'
import IShopByNeed from './ShopByNeed.interface'

const ShopByNeedModule:FunctionComponent<{ module: IShopByNeed }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Shopbyneed Module
      {console.log(module)}
    </div>
  )
}

export default ShopByNeedModule
