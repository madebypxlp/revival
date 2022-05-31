import HeroCarousel from '@components/modules/HeroCarousel/HeroCarousel'
import HeroCarouselFragment from '@components/modules/HeroCarousel/HeroCarousel.graphql'

const TemplateHome = (props: any) => {
  return (
    <div>
      <HeroCarousel module={props.template.pageHome.heroCarousel} />
    </div>
  )
}
export default TemplateHome

const TEMPLATE_PREFIX = 'Template_Home_Pagehome'

export const fragment = `
  ${HeroCarouselFragment(TEMPLATE_PREFIX)}
  fragment TemplateHome on Template_Home {
    templateName
    pageHome {
      fieldGroupName
      heroCarousel {
        ...HeroCarousel
      }
    }
  }
`
