import CarouselHeroModule from '@components/modules/CarouselHero/CarouselHero'
import CarouselHeroFragment from '@components/modules/CarouselHero/CarouselHero.graphql'
import ThreeColumnCopyModule from '@components/modules/ThreeColumnCopy/ThreeColumnCopy'
import ThreeColumnCopyFragment from '@components/modules/ThreeColumnCopy/ThreeColumnCopy.graphql'

const TemplateCareers = (props: any) => {
  return (
    <div>
      <CarouselHeroModule module={props.template.pageCareers.carouselHero} />
      <ThreeColumnCopyModule
        module={props.template.pageCareers.threeColumnCopy}
      />
    </div>
  )
}
export default TemplateCareers

const TEMPLATE_PREFIX = 'Template_Careers_Pagecareers'

export const fragment = `
  ${ThreeColumnCopyFragment(TEMPLATE_PREFIX)}
  ${CarouselHeroFragment(TEMPLATE_PREFIX)}
  fragment TemplateCareers on Template_Careers
  {
    templateName
    pageCareers {
      fieldGroupName
      threeColumnCopy {
        ...ThreeColumnCopy_${TEMPLATE_PREFIX}
      }
      carouselHero {
        ...CarouselHero_${TEMPLATE_PREFIX}
      }

    }
  }
`
