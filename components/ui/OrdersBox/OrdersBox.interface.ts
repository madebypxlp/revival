export interface Order {
  id: string
  placed: Date
  sentTo: string
  total: number
  status: string
}

export default interface IOrdersBox {
  variant: 'orders' | 'account'
  className?: string
  orders: Order[]
}
