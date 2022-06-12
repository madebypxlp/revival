import ThreeColumnCopyModule from '@components/modules/ThreeColumnCopy/ThreeColumnCopy'
import ThreeColumnCopyFragment from '@components/modules/ThreeColumnCopy/ThreeColumnCopy.graphql'

const TemplateCareers = (props: any) => {
  return (
    <div>
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
  fragment TemplateCareers on Template_Careers
  {
    templateName
    pageCareers {
      fieldGroupName
      threeColumnCopy {
        ...ThreeColumnCopy_${TEMPLATE_PREFIX}
      }

    }
  }
`
