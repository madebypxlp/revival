import React, { FunctionComponent } from 'react'
import styles from './CustomerReviewSlider.module.scss'
import ICustomerReviewSlider from './CustomerReviewSlider.interface'
import HeroCarousel from '../HeroCarousel/HeroCarousel'

const CustomerReviewSliderModule: FunctionComponent<{
  module: ICustomerReviewSlider
}> = ({ module }) => {
  console.log(module)
  const { headline, reviews } = module

  return <div className={`${styles.root}`}></div>
}

export default CustomerReviewSliderModule
