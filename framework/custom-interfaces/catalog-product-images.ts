export interface CatalogProductImages {
  id: number
  product_id: number
  is_thumbnail: boolean
  sort_order: number
  description: string
  image_file: string
  url_zoom: string
  url_standard: string
  url_thumbnail: string
  url_tiny: string
  date_modified: Date
}
