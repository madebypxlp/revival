import CustomerReviewSlider from '@components/modules/CustomerReviewSlider/CustomerReviewSlider'
import CustomerReviewSliderFragment from '@components/modules/CustomerReviewSlider/CustomerReviewSlider.graphql'
import FullwidthItemRowModule from '@components/modules/FullwidthItemRow/FullwidthItemRow'
import FullwidthItemRowFragment from '@components/modules/FullwidthItemRow/FullwidthItemRow.graphql'

const VaccineExperts = (props: any) => {
  return (
    <div>
      <FullwidthItemRowModule
        module={props.template.pageVaccineExperts.fullwidthItemRow}
      />
      <CustomerReviewSlider
        module={props.template.pageVaccineExperts.inlineText}
      />
    </div>
  )
}
export default VaccineExperts

const TEMPLATE_PREFIX = 'Template_VaccineExperts_Pagevaccineexperts'

export const fragment = `
  ${CustomerReviewSliderFragment(TEMPLATE_PREFIX)}
  ${FullwidthItemRowFragment(TEMPLATE_PREFIX)}
  fragment TemplateVaccineExperts on Template_VaccineExperts
  {
    templateName
    pageVaccineExperts {
      fieldGroupName
      fullwidthItemRow {
        ...FullwidthItemRow_${TEMPLATE_PREFIX}
      }
      customerReviewSlider {
        ...CustomerReviewSlider_${TEMPLATE_PREFIX}
      }
    }
  }
`
