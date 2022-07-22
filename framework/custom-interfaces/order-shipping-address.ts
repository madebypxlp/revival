interface ShippingQuotes {
  url: string
  resource: string
}

export interface OrderShippingAddress {
  id: number
  order_id: number
  first_name: string
  last_name: string
  company: string
  street_1: string
  street_2: string
  city: string
  zip: string
  country: string
  country_iso2: string
  state: string
  email: string
  phone: string
  items_total: number
  items_shipped: number
  shipping_method: string
  base_cost: string
  cost_ex_tax: string
  cost_inc_tax: string
  cost_tax: string
  cost_tax_class_id: number
  base_handling_cost: string
  handling_cost_ex_tax: string
  handling_cost_inc_tax: string
  handling_cost_tax: string
  handling_cost_tax_class_id: number
  shipping_zone_id: number
  shipping_zone_name: string
  shipping_quotes: ShippingQuotes
  form_fields: any[]
}
