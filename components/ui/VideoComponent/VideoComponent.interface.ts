import { Options } from 'plyr'

export default interface IVideoComponent {
  source: string
  options?: Options
  className?: string
}
