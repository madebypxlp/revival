import ContentAccordionModule from '@components/modules/ContentAccordion/ContentAccordion'
import ContentAccordionFragment from '@components/modules/ContentAccordion/ContentAccordion.graphql'
import CustomerReviewSlider from '@components/modules/CustomerReviewSlider/CustomerReviewSlider'
import CustomerReviewSliderFragment from '@components/modules/CustomerReviewSlider/CustomerReviewSlider.graphql'
import FullwidthItemRowModule from '@components/modules/FullwidthItemRow/FullwidthItemRow'
import FullwidthItemRowFragment from '@components/modules/FullwidthItemRow/FullwidthItemRow.graphql'
import TextImageHeroModule from '@components/modules/TextImageHero/TextImageHero'
import TextImageHeroFragment from '@components/modules/TextImageHero/TextImageHero.graphql'

const VaccineExperts = (props: any) => {
  return (
    <div>
      <TextImageHeroModule
        module={props.template.pageVaccineExperts.textImageHero}
      />
      <FullwidthItemRowModule
        module={props.template.pageVaccineExperts.fullwidthItemRow}
      />
      <CustomerReviewSlider
        module={props.template.pageVaccineExperts.inlineText}
      />
      <ContentAccordionModule
        module={props.template.pageVaccineExperts.contentAccordion}
      />
    </div>
  )
}
export default VaccineExperts

const TEMPLATE_PREFIX = 'Template_VaccineExperts_Pagevaccineexperts'

export const fragment = `
  ${CustomerReviewSliderFragment(TEMPLATE_PREFIX)}
  ${FullwidthItemRowFragment(TEMPLATE_PREFIX)}
  ${TextImageHeroFragment(TEMPLATE_PREFIX)}
  ${ContentAccordionFragment(TEMPLATE_PREFIX)}
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
      textImageHero {
        ...TextImageHero_${TEMPLATE_PREFIX}
      }
      contentAccordion {
        ...ContentAccordion_${TEMPLATE_PREFIX}
      }
    }
  }
`
