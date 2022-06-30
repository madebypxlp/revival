import React, { FunctionComponent } from 'react'
import styles from './ProductCardGrid.module.scss'
import IProductCardGrid from './ProductCardGrid.interface'

const ProductCardGrid: FunctionComponent<IProductCardGrid> = (props) => {
  console.log(props)
  return <div className={`${styles.root}`}>Productcardgrid</div>
}

export default ProductCardGrid
