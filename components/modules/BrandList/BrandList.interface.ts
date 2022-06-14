import { Brand } from 'framework/wordpress/brands'

export default interface IBrandList {
  brands: {
    nodes: [Brand]
  }
}
