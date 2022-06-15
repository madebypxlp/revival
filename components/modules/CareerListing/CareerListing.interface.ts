import Link from '@components/interfaces/Link'

export default interface ICareerListing {
  fieldGroupName: string
  headline: string
  anchor: string
  link: Link
  jobs: [
    {
      title: string
      postTypeJob: {
        description: string
      }
    }
  ]
}
