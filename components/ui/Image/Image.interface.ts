import Image from '@components/interfaces/Image'

// type extended from next/image declaration:
// only allow width + height + any layout other than fill
// or fill without width + height

export declare type IImage = {
  image: Image
  className?: string
  imgClassName?: string
} & (
  | {
      width?: never
      height?: never
      layout: 'fill'
    }
  | {
      width: number | string
      height: number | string
      layout?: ['fixed', 'intrinsic', 'responsive', undefined]
    }
)
