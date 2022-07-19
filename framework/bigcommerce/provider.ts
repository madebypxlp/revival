import { handler as useCart } from './cart/use-cart'
import { handler as useAddItem } from './cart/use-add-item'
import { handler as useUpdateItem } from './cart/use-update-item'
import { handler as useRemoveItem } from './cart/use-remove-item'

import { handler as useWishlist } from './wishlist/use-wishlist'
import { handler as useWishlistAddItem } from './wishlist/use-add-item'
import { handler as useWishlistRemoveItem } from './wishlist/use-remove-item'

import { handler as useCustomer } from './customer/use-customer'
import { handler as useSearch } from './product/use-search'

import { handler as useLogin } from './auth/use-login'
import { handler as useLogout } from './auth/use-logout'
import { handler as useSignup } from './auth/use-signup'

import { handler as useOrders } from './orders/use-orders'
import { handler as listOrderProducts } from './orders/order-products/order-products'
import { handler as getOrderShippingAddresses } from './orders/order-shipping-addresses/order-shipping-addresses'
import { handler as getOrderShipments } from './orders/order-shipments/order-shipments'
import { handler as getCatalogProduct } from './catalog/products/product'

import fetcher from './fetcher'

export const bigcommerceProvider = {
  locale: 'en-us',
  cartCookie: 'bc_cartId',
  fetcher,
  cart: { useCart, useAddItem, useUpdateItem, useRemoveItem },
  wishlist: {
    useWishlist,
    useAddItem: useWishlistAddItem,
    useRemoveItem: useWishlistRemoveItem,
  },
  customer: { useCustomer },
  products: { useSearch },
  auth: { useLogin, useLogout, useSignup },
  catalog: {
    getCatalogProduct,
  },
  orders: {
    useOrders,
    listOrderProducts,
    getOrderShippingAddresses,
    getOrderShipments,
  },
}

export type BigcommerceProvider = typeof bigcommerceProvider
