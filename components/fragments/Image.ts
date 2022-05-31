export const ImageComponent = (key: string = 'image') => `
${key} {
  mobileImage {
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
