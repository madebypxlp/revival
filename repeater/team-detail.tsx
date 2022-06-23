import ClassicHeroModule from '@components/modules/ClassicHero/ClassicHero'
import InlineTextModule from '@components/modules/InlineText/InlineText'
import InlineVideoModule from '@components/modules/InlineVideo/InlineVideo'
import TableAccordionModule from '@components/modules/TableAccordion/TableAccordion'

const renderTeamDetail = (layout: any) => {
  switch (layout.fieldGroupName) {
    case 'Team_Posttypeteam_PageBuilder_ClassicHero':
      return <ClassicHeroModule module={{ ...layout.classicHero }} />
    case 'Team_Posttypeteam_PageBuilder_InlineVideo':
      return <InlineVideoModule module={{ ...layout.inlineVideo }} />
    case 'Team_Posttypeteam_PageBuilder_InlineText':
      return <InlineTextModule module={{ ...layout.inlineText }} />
    case 'Team_Posttypeteam_PageBuilder_TableAccordion':
      return <TableAccordionModule {...layout} />
    default:
      return `${layout.fieldGroupName} not found`
  }
}

export default renderTeamDetail
