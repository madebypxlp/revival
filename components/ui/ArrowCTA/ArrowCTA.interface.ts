import { ReactNode } from 'react'

export default interface IArrowCTA {
  children: ReactNode
  href: string
  color: 'blue' | 'black' | 'white'
  orientation: 'up' | 'down' | 'right'
  disabled?: boolean
}
