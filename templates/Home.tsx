import CustomerFavorites from '@components/modules/customerFavorites/customerFavorites'
import CustomerFavoritesFragment from '@components/modules/customerFavorites/customerFavorites.fragment'
import ShopByCategoryModule from '@components/modules/shop_by_category/shop_by_category'
import ShopByCategoryFragment from '@components/modules/shop_by_category/shop_by_category.graphql'

const TemplateHome = (props: any) => {
  return (
    <div>
      <CustomerFavorites {...props.template.pageHome.customerFavorites} />
      <ShopByCategoryModule module={props.template.pageHome.shopByCategory} />
    </div>
  )
}
export default TemplateHome

const TEMPLATE_PREFIX = 'Template_Home_Pagehome'

export const fragment = `
  ${CustomerFavoritesFragment(TEMPLATE_PREFIX)}
  ${ShopByCategoryFragment(TEMPLATE_PREFIX)}
  fragment TemplateHome on Template_Home {
    templateName
    pageHome {
      fieldGroupName
      customerFavorites {
        ...CustomerFavorites
      }
      shopByCategory {
        ...ShopByCategory
      }
    }
  }
`
