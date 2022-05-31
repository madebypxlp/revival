import React, { FunctionComponent } from 'react'
import styles from './CustomerReviewSlider.module.scss'
import ICustomerReviewSlider from './CustomerReviewSlider.interface'

const CustomerReviewSliderModule:FunctionComponent<{ module: ICustomerReviewSlider }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Customerreviewslider Module
      {console.log(module)}
    </div>
  )
}

export default CustomerReviewSliderModule
