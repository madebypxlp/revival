import React, { FunctionComponent } from 'react'
import styles from './CareerListing.module.scss'
import ICareerListing from './CareerListing.interface'

const CareerListingModule:FunctionComponent<{ module: ICareerListing }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Careerlisting Module
    </div>
  )
}

export default CareerListingModule
