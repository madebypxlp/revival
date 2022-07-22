import FormBuilderModule from '@components/modules/FormBuilder/FormBuilder'
import FormBuilderFragment from '@components/modules/FormBuilder/FormBuilder.graphql'
import HeaderWithWysiwygModule from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg'
import HeaderWithWysiwygFragment from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg.graphql'

const DonationRequest = (props: any) => {
  const {
    template: { pageDonationRequest },
  } = props
  return (
    <div>
      <HeaderWithWysiwygModule module={pageDonationRequest.headerWithWysiwyg} />
      <FormBuilderModule module={pageDonationRequest.formBuilder} />
    </div>
  )
}
export default DonationRequest

const TEMPLATE_PREFIX = 'Template_DonationRequest_Pagedonationrequest'

export const fragment = `
  ${HeaderWithWysiwygFragment(TEMPLATE_PREFIX)}
  ${FormBuilderFragment(TEMPLATE_PREFIX)}
  fragment TemplateDonationRequest on Template_DonationRequest
  {
    templateName
    pageDonationRequest {
      fieldGroupName
      headerWithWysiwyg {
        ...HeaderWithWysiwyg_${TEMPLATE_PREFIX}
      }
      formBuilder {
        ...FormBuilder_${TEMPLATE_PREFIX}
      }
    }
  }
`
