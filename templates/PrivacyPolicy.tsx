import HeaderWithWysiwygFragment from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg.graphql'
import HeaderWithWysiwygModule from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg'

const TemplatePrivacyPolicy = (props: any) => {
  return (
    <div>
      <HeaderWithWysiwygModule
        module={props.template.pagePrivacyPolicy.headerWithWysiwyg}
      />
    </div>
  )
}
export default TemplatePrivacyPolicy

const TEMPLATE_PREFIX = 'Template_PrivacyPolicy_Pageprivacypolicy'

export const fragment = `
  ${HeaderWithWysiwygFragment(TEMPLATE_PREFIX)}

  fragment TemplatePrivacyPolicy on Template_PrivacyPolicy
  {
    templateName
    pagePrivacyPolicy {
      fieldGroupName
      headerWithWysiwyg {
        ...HeaderWithWysiwyg_${TEMPLATE_PREFIX}
      }
    }
  }
`
