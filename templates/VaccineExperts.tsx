import ContentAccordionModule from '@components/modules/ContentAccordion/ContentAccordion'
import ContentAccordionFragment from '@components/modules/ContentAccordion/ContentAccordion.graphql'
import CustomerReviewSlider from '@components/modules/CustomerReviewSlider/CustomerReviewSlider'
import CustomerReviewSliderFragment from '@components/modules/CustomerReviewSlider/CustomerReviewSlider.graphql'
import FullwidthItemRowModule from '@components/modules/FullwidthItemRow/FullwidthItemRow'
import FullwidthItemRowFragment from '@components/modules/FullwidthItemRow/FullwidthItemRow.graphql'
import ShopByCategoryModule from '@components/modules/ShopByCategory/ShopByCategory'
import ShopByCategoryFragment from '@components/modules/ShopByCategory/ShopByCategory.graphql'
import TextImageHeroModule from '@components/modules/TextImageHero/TextImageHero'
import TextImageHeroFragment from '@components/modules/TextImageHero/TextImageHero.graphql'
import VideoGridModule from '@components/modules/VideoGrid/VideoGrid'
import VideoGridFragment from '@components/modules/VideoGrid/VideoGrid.graphql'

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
      <ShopByCategoryModule
        module={props.template.pageVaccineExperts.shopByCategory}
      />
      <VideoGridModule module={props.template.pageVaccineExperts.videoGrid} />
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
  ${ShopByCategoryFragment(TEMPLATE_PREFIX)}
  ${VideoGridFragment(TEMPLATE_PREFIX)}
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
      shopByCategory {
        ...ShopByCategory_${TEMPLATE_PREFIX}
      }
      videoGrid {
        ...VideoGrid_${TEMPLATE_PREFIX}
      }
    }
  }
`
