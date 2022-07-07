export interface Order {
  id: string
  placed: Date
  sentTo: string
  total: number
  status: string
}

export default interface IOrdersBox {
  variant: string
  orders: Order[]
}
