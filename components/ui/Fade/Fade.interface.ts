import { ReactNode } from 'react'

export default interface IFade {
  children: any
  threshold?: number
  delay?: number
  className?: string
  disableOnMobile?: boolean
}
