export default interface Image {
  desktopImage: {
    sourceUrl: string
    altText: string
    mediaDetails: {
      width: number
      height: number
    }
  }
  mobileImage: {
    sourceUrl: string
    altText: string
    mediaDetails: {
      width: number
      height: number
    }
  }
}
