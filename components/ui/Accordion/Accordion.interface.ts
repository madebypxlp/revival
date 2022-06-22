import { ReactChild, ReactNode } from 'react'

export default interface IAccordion {
  open: boolean
  onOpen?: () => any
  headline: String
  children?: ReactNode
}
