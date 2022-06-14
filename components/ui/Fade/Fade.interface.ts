import { ReactNode } from 'react'

export default interface IFade {
  children: ReactNode
  threshold?: number
  delay?: number
  className?: string
  disableOnMobile?: boolean
}
