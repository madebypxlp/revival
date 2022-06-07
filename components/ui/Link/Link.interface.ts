import { ReactNode } from 'react'

export default interface ILink {
  children: ReactNode
  href: string
  color: 'blue' | 'black'
  disabled?: boolean
}
