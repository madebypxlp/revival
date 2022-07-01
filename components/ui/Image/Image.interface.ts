import Image from '@components/interfaces/Image'

// type extended from next/image declaration:
// only allow width + height + any layout other than fill
// or fill without width + height

export declare type IImage = {
  image: Image
  className?: string
  imgClassName?: string
  objectFit?: 'cover' | 'contain'
  objectPosition?: string
} & (
  | {
      width?: never
      height?: never
      layout?: 'fill'
    }
  | {
      layout?: 'fixed' | 'intrinsic' | 'responsive' | undefined
    }
) & {
    loading?: 'eager' | 'lazy' | undefined
  }
