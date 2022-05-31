import Link from '@components/interfaces/Link'

export default interface IOurBrands {
  fieldGroupName: string
  rows: [
    {
      headline: string
      link: Link
      brands: [
        {
          brandLogo: {
            sourceUrl: string
            altText: string
          }
          url: string
        }
      ]
    }
  ]
}
