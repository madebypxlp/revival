import { ImageComponent } from '@components/fragments/Image'

const ProductCategoryContentTabsFragment = (t: string) => `
  fragment ProductCategoryContentTabs_${t} on ${t}_ProductCategoryContentTabs {
    fieldGroupName
    tabs {
      copy
      headline
      ${ImageComponent('primaryImage')}
      ${ImageComponent()}
      ${ImageComponent('primaryImageImage')}
      link {
        ...Link
      }
      primaryName
      productCarousel {
        headline
        productId
      }
    }
  }
`
export default ProductCategoryContentTabsFragment
