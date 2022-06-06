import { ImageComponent } from '@components/fragments/Image'

const VideoHeroFragment = (t: string) => `
  fragment VideoHero_${t} on ${t}_VideoHero {
    fieldGroupName
    ${ImageComponent()}
    logo {
      sourceUrl
      altText
    }
    videoName
    youtubeId
  }
`
export default VideoHeroFragment
