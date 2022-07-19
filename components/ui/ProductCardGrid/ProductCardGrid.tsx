import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './ProductCardGrid.module.scss'
import IProductCardGrid from './ProductCardGrid.interface'
import ProductCard from '../ProductCard/ProductCard'

const ProductCardGrid: FunctionComponent<IProductCardGrid> = (props) => {
  const { headline, products, variant, className } = props

  const productCardProps = { showFavoriteIcon: variant === 'favorites' }

  return (
    <div className={c(styles.root, className)}>
      {headline && (
        <div className="container default-grid">
          <div
            className={c(
              'col-start-1 col-span-2 md:col-span-3',
              styles.headlineContainer
            )}
          >
            <h5>{headline}</h5>
          </div>
        </div>
      )}
      <div className={c('container default-grid', styles.productGridContainer)}>
        {products.map((p) => (
          <div className="col-span-1 md:col-span-4 lg:col-span-3" key={p.id}>
            <ProductCard {...p} {...productCardProps} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCardGrid
