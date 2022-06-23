import FormBuilderModule from '@components/modules/FormBuilder/FormBuilder'
import FormBuilderFragment from '@components/modules/FormBuilder/FormBuilder.graphql'
import HeaderWithWysiwygModule from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg'
import HeaderWithWysiwygFragment from '@components/modules/HeaderWithWysiwyg/HeaderWithWysiwyg.graphql'

const CalendarContest = (props: any) => {
  const {
    template: { pageCalendarContest },
  } = props
  return (
    <div>
      <HeaderWithWysiwygModule module={pageCalendarContest.headerWithWysiwyg} />
      <FormBuilderModule module={pageCalendarContest.formBuilder} />
    </div>
  )
}
export default CalendarContest

const TEMPLATE_PREFIX = 'Template_CalendarContest_Pagecalendarcontest'

export const fragment = `
  ${HeaderWithWysiwygFragment(TEMPLATE_PREFIX)}
  ${FormBuilderFragment(TEMPLATE_PREFIX)}
  fragment TemplateCalendarContest on Template_CalendarContest
  {
    templateName
    pageCalendarContest {
      fieldGroupName
      headerWithWysiwyg {
        ...HeaderWithWysiwyg_${TEMPLATE_PREFIX}
      }
      formBuilder {
        ...FormBuilder_${TEMPLATE_PREFIX}
      }
    }
  }
`
