import Image, { MediaItem } from '@components/interfaces/Image'

export default interface IVideoHero {
  fieldGroupName: string
  image: Image
  logo: MediaItem
  videoName: string
  vimeoId: string
}
