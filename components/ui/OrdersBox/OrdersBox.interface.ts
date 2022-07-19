import { Order } from 'framework/custom-interfaces/order'

export default interface IOrdersBox {
  variant: 'orders' | 'account'
  className?: string
  orders: Order[]
}
