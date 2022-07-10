export default interface Image {
  desktopImage: {
    sourceUrl: string
    altText: string
    mediaDetails: {
      width: number
      height: number
    }
  }
  tabletImage: {
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

export interface MediaItem {
  sourceUrl: string
  altText: string
  mediaDetails: {
    width: number
    height: number
  }
}
