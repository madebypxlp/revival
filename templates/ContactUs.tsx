import HeaderWithWysiwygFragment from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg.graphql'
import HeaderWithWysiwygModule from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg'

const TemplateContactUs = (props: any) => (
  <div>
    <HeaderWithWysiwygModule
      module={props.template.pageContactUs.headerWithWysiwyg}
    />
  </div>
)
export default TemplateContactUs

const TEMPLATE_PREFIX = 'Template_ContactUs_Pagecontactus'

export const fragment = `
  ${HeaderWithWysiwygFragment(TEMPLATE_PREFIX)}

  fragment TemplateContactUs on Template_ContactUs
  {
    templateName
    pageContactUs {
      fieldGroupName
      headerWithWysiwyg {
        ...HeaderWithWysiwyg_${TEMPLATE_PREFIX}
      }
    }
  }
`
