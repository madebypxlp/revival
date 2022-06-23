import React, { FunctionComponent } from 'react'
import styles from './ProductSliderWithBigImage.module.scss'
import IProductSliderWithBigImage from './ProductSliderWithBigImage.interface'

const ProductSliderWithBigImageModule:FunctionComponent<{ module: IProductSliderWithBigImage }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Productsliderwithbigimage Module
    </div>
  )
}

export default ProductSliderWithBigImageModule
