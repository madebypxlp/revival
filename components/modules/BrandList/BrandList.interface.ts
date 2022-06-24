import { Brand } from 'framework/wordpress/queries/post-type-brands/brands'

export default interface IBrandList {
  brands: {
    nodes: [Brand]
  }
}
