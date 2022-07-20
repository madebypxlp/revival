import Link from '@components/interfaces/Link'
import { MouseEventHandler, ReactNode } from 'react'

export default interface IArrowCTA {
  children?: ReactNode
  href?: string
  target?: string
  color: 'blue' | 'black' | 'white' | 'yellow'
  orientation: 'up' | 'down' | 'right'
  disabled?: boolean
  link?: Link
  onClick?: any
  className?: string
  subnav?: boolean
}
