const VideoGridFragment = (t: string) => `
  fragment VideoGrid_${t} on ${t}_VideoGrid {
    fieldGroupName
    headline
    videos {
      name
      title
      youtubeId
    }
  }
`
export default VideoGridFragment
