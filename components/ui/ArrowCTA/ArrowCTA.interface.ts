import Link from '@components/interfaces/Link'
import { ReactNode } from 'react'

export default interface IArrowCTA {
  children?: ReactNode
  href?: string
  target?: string
  color: 'blue' | 'black' | 'white'
  orientation: 'up' | 'down' | 'right'
  disabled?: boolean
  link?: Link
  className?: string
  onClick?: any
  subnav?: boolean
}
