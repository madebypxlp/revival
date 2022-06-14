export default interface ICareerListing {
  fieldGroupName: string
  headline: string
  anchor: string
  jobs: [
    {
      title: string
      postTypeJob: {
        description: string
      }
    }
  ]
}
