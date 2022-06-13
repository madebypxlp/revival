import AccordionWithImageModule from '@components/modules/AccordionWithImage/AccordionWithImage'
import AccordionWithImageFragment from '@components/modules/AccordionWithImage/AccordionWithImage.graphql'
import CareerListingModule from '@components/modules/CareerListing/CareerListing'
import CareerListingFragment from '@components/modules/CareerListing/CareerListing.graphql'
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
      <AccordionWithImageModule
        module={props.template.pageCareers.accordionWithImage}
      />
      <CareerListingModule module={props.template.pageCareers.careerListing} />
    </div>
  )
}
export default TemplateCareers

const TEMPLATE_PREFIX = 'Template_Careers_Pagecareers'

export const fragment = `
  ${ThreeColumnCopyFragment(TEMPLATE_PREFIX)}
  ${CarouselHeroFragment(TEMPLATE_PREFIX)}
  ${CareerListingFragment(TEMPLATE_PREFIX)}
  ${AccordionWithImageFragment(TEMPLATE_PREFIX)}
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
      careerListing {
        ...CareerListing_${TEMPLATE_PREFIX}
      }
      accordionWithImage {
        ...AccordionWithImage_${TEMPLATE_PREFIX}
      }
    }
  }
`
