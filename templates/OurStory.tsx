import AccordionWithImageModule from '@components/modules/AccordionWithImage/AccordionWithImage'
import AccordionWithImageFragment from '@components/modules/AccordionWithImage/AccordionWithImage.graphql'
import InlineText from '@components/modules/InlineText/InlineText'
import InlineTextFragment from '@components/modules/InlineText/InlineText.graphql'

const OurStory = (props: any) => {
  return (
    <div>
      <InlineText module={props.template.pageOurStory.inlineText} />
      <AccordionWithImageModule
        module={props.template.pageOurStory.accordionWithImage}
      />
    </div>
  )
}
export default OurStory

const TEMPLATE_PREFIX = 'Template_OurStory_Pageourstory'

export const fragment = `
  ${InlineTextFragment(TEMPLATE_PREFIX)}
  ${AccordionWithImageFragment(TEMPLATE_PREFIX)}
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
    }
  }
`
