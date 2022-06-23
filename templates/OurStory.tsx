import AccordionWithImageModule from '@components/modules/AccordionWithImage/AccordionWithImage'
import AccordionWithImageFragment from '@components/modules/AccordionWithImage/AccordionWithImage.graphql'
import ImageInfoSliderModule from '@components/modules/ImageInfoSlider/ImageInfoSlider'
import ImageInfoSliderFragment from '@components/modules/ImageInfoSlider/ImageInfoSlider.graphql'
import ImageWithInfosModule from '@components/modules/ImageWithInfos/ImageWithInfos'
import ImageWithInfosFragment from '@components/modules/ImageWithInfos/ImageWithInfos.graphql'
import InlineText from '@components/modules/InlineText/InlineText'
import InlineTextFragment from '@components/modules/InlineText/InlineText.graphql'
import TextImageHeroModule from '@components/modules/TextImageHero/TextImageHero'
import TextImageHeroFragment from '@components/modules/TextImageHero/TextImageHero.graphql'
import ThreeColumnCopyModule from '@components/modules/ThreeColumnCopy/ThreeColumnCopy'
import ThreeColumnCopyFragment from '@components/modules/ThreeColumnCopy/ThreeColumnCopy.graphql'

const OurStory = (props: any) => {
  const {
    template: { pageOurStory },
  } = props
  return (
    <div>
      <TextImageHeroModule module={pageOurStory.textImageHero} />
      <InlineText module={pageOurStory.inlineText} />
      <ImageInfoSliderModule module={pageOurStory.imageInfoSlider} />
      <ThreeColumnCopyModule module={pageOurStory.threeColumnCopy} />
      <AccordionWithImageModule module={pageOurStory.accordionWithImage} />
      <ImageWithInfosModule module={pageOurStory.imageWithInfos} />
    </div>
  )
}
export default OurStory

const TEMPLATE_PREFIX = 'Template_OurStory_Pageourstory'

export const fragment = `
  ${InlineTextFragment(TEMPLATE_PREFIX)}
  ${AccordionWithImageFragment(TEMPLATE_PREFIX)}
  ${TextImageHeroFragment(TEMPLATE_PREFIX)}
  ${ImageInfoSliderFragment(TEMPLATE_PREFIX)}
  ${ThreeColumnCopyFragment(TEMPLATE_PREFIX)}
  ${ImageWithInfosFragment(TEMPLATE_PREFIX)}

  fragment TemplateOurStory on Template_OurStory
  {
    templateName
    pageOurStory {
      fieldGroupName
      inlineText {
        ...InlineText_${TEMPLATE_PREFIX}
      }
      accordionWithImage {
        ...AccordionWithImage_${TEMPLATE_PREFIX}
      }
      textImageHero {
        ...TextImageHero_${TEMPLATE_PREFIX}
      }
      imageInfoSlider {
        ...ImageInfoSlider_${TEMPLATE_PREFIX}
      }
      threeColumnCopy {
        ...ThreeColumnCopy_${TEMPLATE_PREFIX}
      }
      imageWithInfos {
        ...ImageWithInfos_${TEMPLATE_PREFIX}
      }
    }
  }
`
