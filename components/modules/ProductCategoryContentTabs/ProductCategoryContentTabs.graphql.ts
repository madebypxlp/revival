import { ImageComponent } from "@components/fragments/Image"

const ProductCategoryContentTabsFragment = (t: string) => `
  fragment ProductCategoryContentTabs_${t} on ${t}_ProductCategoryContentTabs {
    fieldGroupName
    tabs {
      copy
      headline
      ${ImageComponent()}
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
