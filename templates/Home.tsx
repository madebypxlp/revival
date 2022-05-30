import CustomerFavorites, {
  CustomerFavoritesFragment,
} from '@components/modules/CustomerFavorites/CustomerFavorites'
import { PageInterface } from 'framework/wordpress/page-query'

const TemplateHome = (props: PageInterface) => {
  return (
    <div>
      <CustomerFavorites />
    </div>
  )
}
export default TemplateHome

const TEMPLATE_PREFIX = 'Template_Home_Pagehome'

export const fragment = `
  ${CustomerFavoritesFragment(TEMPLATE_PREFIX)}
  fragment TemplateHome on Template_Home {
    templateName
    pageHome {
      fieldGroupName
      customerFavorites {
        ...CustomerFavorites
      }
    }
  }
`
