import TableAccordionModule from '@components/modules/TableAccordion/TableAccordion'

const renderTeamDetail = (layout: any) => {
  switch (layout.fieldGroupName) {
    case 'Team_Posttypeteam_PageBuilder_TableAccordion':
      return <TableAccordionModule {...layout} />
    default:
      return `${layout.fieldGroupName} not found`
  }
}

export default renderTeamDetail
