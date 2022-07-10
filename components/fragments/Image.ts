export const ImageComponent = (key: string = 'image') => `
${key} {
  mobileImage {
    ...Image
  }
  tabletImage {
    ...Image
    }
  desktopImage {
    ...Image
   }
 }`

export default `
  fragment Image on MediaItem {
      altText
      sourceUrl
      mediaDetails {
        width
        height
      }
  }
`
