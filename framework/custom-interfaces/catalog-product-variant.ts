interface OptionValue {
  id: number
  label: string
  option_id: number
  option_display_name: string
}

export interface CatalogProductVariant {
  id: number
  product_id: number
  sku: string
  sku_id: number
  price: number
  calculated_price: number
  sale_price: number
  retail_price: number
  map_price?: any
  weight: number
  calculated_weight: number
  width?: any
  height?: any
  depth?: any
  is_free_shipping: boolean
  fixed_cost_shipping_price: number
  purchasing_disabled: boolean
  purchasing_disabled_message: string
  image_url: string
  cost_price: number
  upc: string
  mpn: string
  gtin: string
  inventory_level: number
  inventory_warning_level: number
  bin_picking_number: string
  option_values: OptionValue[]
}
