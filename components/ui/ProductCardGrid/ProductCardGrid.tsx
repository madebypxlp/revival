import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './ProductCardGrid.module.scss'
import IProductCardGrid from './ProductCardGrid.interface'
import ProductCard from '../ProductCard/ProductCard'

const ProductCardGrid: FunctionComponent<IProductCardGrid> = (props) => {
  console.log(props)
  const { headline } = props

  const product = {
    id: '#80122-795-431',
    price: 25,
    image: null,
    name: "Doc Roy's Derma Coat Plus",
    oldPrice: 35,
    isNew: true,
    isPrescription: true,
    isOurBrand: true,
    label: 'STAFF PICK',
    headline: 'Get her healthy first',
  }
  const products = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
  ]

  return (
    <div className={`${styles.root}`}>
      <div className={'container default-grid'}>
        <div
          className={c(
            'col-start-1 col-span-2 md:col-span-3',
            styles.headlineContainer
          )}
        >
          <h5>{headline}</h5>
        </div>
        {products.map((p) => {
          return (
            <div className={'col-span-2 md:col-span-4'}>
              {/* <ProductCard {...p} /> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCardGrid
