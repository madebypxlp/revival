import React, { FunctionComponent } from 'react'
import styles from './OurBrands.module.scss'
import IOurBrands from './OurBrands.interface'

const OurBrandsModule:FunctionComponent<{ module: IOurBrands }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Ourbrands Module
      {console.log(module)}
    </div>
  )
}

export default OurBrandsModule
