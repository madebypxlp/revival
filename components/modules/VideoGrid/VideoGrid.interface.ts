export default interface IVideoGrid {
  fieldGroupName: string
  headline: string
  videos: [
    {
      name: string
      title: string
      youtubeId: string
    }
  ]
}
