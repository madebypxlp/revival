import { FC, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import s from './WishlistCard.module.scss'
import { Trash } from '@components/icons'
import { Text } from '@components/ui'

import { useUI } from '@components/ui/context'
import type { Product } from '@commerce/types'
import usePrice from '@framework/product/use-price'
import useAddItem from '@framework/cart/use-add-item'
import useRemoveItem from '@framework/wishlist/use-remove-item'
import Button from '@components/ui/Button/Button'

interface Props {
  product: Product
}

const WishlistCard: FC<Props> = ({ product }) => {
  const { price } = usePrice({
    amount: product.prices?.price?.value,
    baseAmount: product.prices?.retailPrice?.value,
    currencyCode: product.prices?.price?.currencyCode!,
  })
  // @ts-ignore Wishlist is not always enabled
  const removeItem = useRemoveItem({ wishlist: { includeProducts: true } })
  const [loading, setLoading] = useState(false)
  const [removing, setRemoving] = useState(false)
  const addItem = useAddItem()
  const { openSidebar } = useUI()

  const handleRemove = async () => {
    setRemoving(true)

    try {
      // If this action succeeds then there's no need to do `setRemoving(true)`
      // because the component will be removed from the view
      await removeItem({ id: product.id! })
    } catch (error) {
      setRemoving(false)
    }
  }
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(product.variants[0].id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <div className={cn(s.root, { 'opacity-75 pointer-events-none': removing })}>
      <div className={`col-span-3 ${s.productBg}`}>
        <Image
          src={product.images[0].url}
          width={400}
          height={400}
          alt={product.images[0].alt || 'Product Image'}
        />
      </div>

      <div className="col-span-7">
        <h3 className="text-2xl mb-2">
          <Link href={`/product${product.path}`}>
            <a>{product.name}</a>
          </Link>
        </h3>
        <div className="mb-4">
          <Text html={product.description} />
        </div>
        <Button
          aria-label="Add to Cart"
          type="default"
          variant="large"
          color="yellow"
          className={'py-1 px-5 border  rounded-15 shadow-sm hover:-hover'}
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex justify-end font-bold">{price}</div>
        <div className="flex justify-end">
          <button onClick={handleRemove}>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishlistCard
