import BrandListModule from '@components/modules/BrandList/BrandList'
import BrandListFragment from '@components/modules/BrandList/BrandList.graphql'
import HeaderWithWysiwygModule from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg'
import HeaderWithWysiwygFragment from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg.graphql'
import OurBrandsModule from '@components/modules/OurBrands/OurBrands'
import OurBrandsFragment from '@components/modules/OurBrands/OurBrands.graphql'

const TemplateAllBrands = (props: any) => {
  const { brands } = props
  return (
    <div>
      <HeaderWithWysiwygModule
        module={props.template.pageAllBrands.headerWithWysiwyg}
      />
      <OurBrandsModule module={props.template.pageAllBrands.ourBrands} />
      <BrandListModule brands={brands} />
    </div>
  )
}
export default TemplateAllBrands

const TEMPLATE_PREFIX = 'Template_AllBrands_Pageallbrands'

export const fragment = `
  ${HeaderWithWysiwygFragment(TEMPLATE_PREFIX)}
  ${OurBrandsFragment(TEMPLATE_PREFIX)}
  ${BrandListFragment(TEMPLATE_PREFIX)}

  fragment TemplateAllBrands on Template_AllBrands
  {
    templateName
    pageAllBrands {
      fieldGroupName
      headerWithWysiwyg {
        ...HeaderWithWysiwyg_${TEMPLATE_PREFIX}
      }
      ourBrands {
        ...OurBrands_${TEMPLATE_PREFIX}
      }
      brandList {
        ...BrandList_${TEMPLATE_PREFIX}
      }
    }
  }
`
