export default interface ITableAccordion {
  fieldGroupName: string
  tableAccordion: {
    accordion: [
      {
        copy: string
        headline: string
        rows: [
          {
            firstColumn: string
            secondColumn: string
            thirdColumn: string
          }
        ]
      }
    ]
  }
}
