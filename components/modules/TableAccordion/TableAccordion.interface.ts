export default interface ITableAccordion {
  fieldGroupName: string
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
