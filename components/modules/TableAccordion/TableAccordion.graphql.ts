const TableAccordionFragment = (t: string) => `
  fragment TableAccordion_${t} on ${t}_TableAccordion {
    fieldGroupName
    tableAccordion {
      accordion {
        copy
        headline
        rows {
          firstColumn
          secondColumn
          thirdColumn
        }
      }
    }
  }
`
export default TableAccordionFragment
