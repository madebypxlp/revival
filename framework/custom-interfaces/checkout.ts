interface Currency {
  code: string
}

interface Discount {
  id: string
  discounted_amount: number
}

interface PhysicalItem {
  id: string
  parent_id?: any
  variant_id: number
  product_id: number
  sku: string
  name: string
  url: string
  quantity: number
  is_taxable: boolean
  image_url: string
  discounts: any[]
  coupons: any[]
  discount_amount: number
  coupon_amount: number
  list_price: number
  sale_price: number
  extended_list_price: number
  extended_sale_price: number
  is_require_shipping: boolean
  gift_wrapping?: any
  is_mutable: boolean
}

interface LineItems {
  physical_items: PhysicalItem[]
  digital_items: any[]
  gift_certificates: any[]
  custom_items: any[]
}

interface Cart {
  id: string
  customer_id: number
  channel_id: number
  email: string
  currency: Currency
  base_amount: number
  discount_amount: number
  cart_amount_inc_tax: number
  cart_amount_ex_tax: number
  coupons: any[]
  discounts: Discount[]
  line_items: LineItems
  created_time: Date
  updated_time: Date
}

interface BillingAddress {}

interface Tax {
  name: string
  amount: number
}

export interface CheckoutOrder {
  id: string
  cart: Cart
  billing_address: BillingAddress
  consignments: any[]
  taxes: Tax[]
  coupons: any[]
  order_id?: any
  shipping_cost_total_inc_tax: number
  shipping_cost_total_ex_tax: number
  handling_cost_total_inc_tax: number
  handling_cost_total_ex_tax: number
  tax_total: number
  subtotal_inc_tax: number
  subtotal_ex_tax: number
  grand_total: number
  created_time: Date
  updated_time: Date
  customer_message: string
}
