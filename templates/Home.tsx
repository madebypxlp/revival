import HeroCarousel from '@components/modules/HeroCarousel/HeroCarousel'
import HeroCarouselFragment from '@components/modules/HeroCarousel/HeroCarousel.graphql'
import FullwidthItemRow from '@components/modules/FullwidthItemRow/FullwidthItemRow'
import FullwidthItemRowFragment from '@components/modules/FullwidthItemRow/FullwidthItemRow.graphql'

const TemplateHome = (props: any) => {
  return (
    <div>
      <HeroCarousel module={props.template.pageHome.heroCarousel} />
      <FullwidthItemRow module={props.template.pageHome.fullwidthItemRow} />
    </div>
  )
}
export default TemplateHome

const TEMPLATE_PREFIX = 'Template_Home_Pagehome'

export const fragment = `
  ${HeroCarouselFragment(TEMPLATE_PREFIX)}
  ${FullwidthItemRowFragment(TEMPLATE_PREFIX)}
  fragment TemplateHome on Template_Home {
    templateName
    pageHome {
      fieldGroupName
      heroCarousel {
        ...HeroCarousel
      }
      fullwidthItemRow {
        ...FullwidthItemRow
      }
    }
  }
`
