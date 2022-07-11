import { PlyrOptions } from 'plyr-react'

export default interface IVideoComponent {
  source: string
  options?: PlyrOptions
  className?: string
}
