import { FC } from 'react'
import Link from 'next/link'
import type { Product } from '@commerce/types'
import { ProductCard } from '@components/product'
import { getCategoryPath } from '@lib/search'
import s from './HomeAllProductsGrid.module.scss'

interface Props {
  categories?: any
  products?: Product[]
}

const HomeAllProductsGrid: FC<Props> = ({ categories, products = [] }) => (
  <div className={s.root}>
    <div className={s.asideWrapper}>
      <div className={s.aside}>
        <ul className="mb-10">
          <li className="py-1 text-base font-bold tracking-wide">
            <Link href={getCategoryPath('')}>
              <a>All Categories</a>
            </Link>
          </li>
          {categories.map((cat: any) => (
            <li key={cat.path} className="py-1  text-base">
              <Link href={getCategoryPath(cat.path)}>
                <a>{cat.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex-1">
      <div className="default-grid">
        {products.map((product) => (
          <div key={product.path} className="col-span-4">
            <ProductCard
              product={product}
              variant="simple"
              imgProps={{
                width: 480,
                height: 480,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default HomeAllProductsGrid
