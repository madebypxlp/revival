interface BillingAddress {
  first_name: string
  last_name: string
  company: string
  street_1: string
  street_2: string
  city: string
  state: string
  zip: string
  country: string
  country_iso2: string
  phone: string
  email: string
}

interface ShippingAddress {
  first_name: string
  last_name: string
  company: string
  street_1: string
  street_2: string
  city: string
  state: string
  zip: string
  country: string
  country_iso2: string
  phone: string
  email: string
}

interface Item {
  order_product_id: number
  product_id: number
  quantity: number
}

export interface OrderShipment {
  id: number
  order_id: number
  customer_id: number
  order_address_id: number
  date_created: string
  tracking_number: string
  merchant_shipping_cost: string
  shipping_method: string
  comments: string
  shipping_provider: string
  tracking_carrier: string
  tracking_link: string
  billing_address: BillingAddress
  shipping_address: ShippingAddress
  items: Item[]
}
