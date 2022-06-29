import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './ProductCardGrid.module.scss'
import IProductCardGrid from './ProductCardGrid.interface'
import { ProductCard } from '@components/product'

const ProductCardGrid: FunctionComponent<IProductCardGrid> = (props) => {
  console.log(props)
  const { products, headline } = props
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
          return <ProductCard {...p} />
        })}
      </div>
    </div>
  )
}

export default ProductCardGrid
