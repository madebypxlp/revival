import React, { FunctionComponent } from 'react'
import c from 'classnames'
import type { Product } from '@commerce/types'
import styles from './ProductCardGrid.module.scss'
import IProductCardGrid from './ProductCardGrid.interface'
import ProductCard from '../ProductCard/ProductCard'

const ProductCardGrid: FunctionComponent<IProductCardGrid> = (props) => {
  const {
    headline,
    products,
    catalogProducts,
    variant = 'default',
    className,
  } = props

  const productCardProps = { showFavoriteIcon: variant === 'favorites' }

  return (
    <div className={c(styles.root, styles[`variant--${variant}`], className)}>
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
      <div className={c('default-grid', styles.productGridContainer)}>
        {catalogProducts &&
          catalogProducts.map((p) => (
            <div className="col-span-1 md:col-span-4 lg:col-span-3" key={p.id}>
              <ProductCard
                price={p.price}
                id={p.id}
                name={p.name}
                imageURL={p.primary_image.url_thumbnail}
                {...productCardProps}
              />
            </div>
          ))}
        {products &&
          products.map((p) => (
            <div className="col-span-1 md:col-span-4 lg:col-span-3" key={p.id}>
              <ProductCard
                price={p.price.value}
                id={p.id}
                name={p.name}
                imageURL={p.images[0]?.url}
                {...productCardProps}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductCardGrid
