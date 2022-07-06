import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './ProductCardGrid.module.scss'
import IProductCardGrid from './ProductCardGrid.interface'
import ProductCard from '../ProductCard/ProductCard'

const ProductCardGrid: FunctionComponent<IProductCardGrid> = (props) => {
  const { headline, products } = props

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
      </div>
      <div className={c('container default-grid', styles.productGridContainer)}>
        {products.map((p) => {
          return (
            <div className={'col-span-1 md:col-span-4 lg:col-span-3'}>
              <ProductCard {...p} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCardGrid
