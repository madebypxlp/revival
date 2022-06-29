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
    image: {
      desktopImage: {
        sourceUrl:
          'https://revival-wp.weareenvoy.net/app/uploads/2022/06/parker-coffman-pr6Blqs0yWA-unsplash-1.png',
        altText: '',
        mediaDetails: {
          width: 0,
          height: 0,
        },
      },
      mobileImage: {
        sourceUrl:
          'https://revival-wp.weareenvoy.net/app/uploads/2022/06/parker-coffman-pr6Blqs0yWA-unsplash-1.png',
        altText: '',
        mediaDetails: {
          width: 0,
          height: 0,
        },
      },
    },
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
      </div>
      <div className={'container default-grid gap-y-85'}>
        {products.map((p) => {
          return (
            <div className={'col-span-2 md:col-span-3'}>
              <ProductCard {...p} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCardGrid
