import CustomerReviewSlider from '@components/modules/CustomerReviewSlider/CustomerReviewSlider'
import CustomerReviewSliderFragment from '@components/modules/CustomerReviewSlider/CustomerReviewSlider.graphql'

const VaccineExperts = (props: any) => {
  return (
    <div>
      <CustomerReviewSlider module={props.template.pageVaccineExperts.inlineText} />
    </div>
  )
}
export default VaccineExperts

const TEMPLATE_PREFIX = 'Template_VaccineExperts_Pagevaccineexperts'

export const fragment = `
  ${CustomerReviewSliderFragment(TEMPLATE_PREFIX)}
  fragment TemplateVaccineExperts on Template_VaccineExperts
  {
    templateName
    pageVaccineExperts {
      fieldGroupName
      customerReviewSlider {
        ...CustomerReviewSlider_${TEMPLATE_PREFIX}
      }
    }
  }
`
