import React, { FunctionComponent } from 'react'
import styles from './ProductSlider.module.scss'
import IProductSlider from './ProductSlider.interface'

const ProductSliderModule:FunctionComponent<{ module: IProductSlider }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Productslider Module
      {console.log(module)}
    </div>
  )
}

export default ProductSliderModule
