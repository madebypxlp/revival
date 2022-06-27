import { ReactNode } from 'react'
import Link from '@components/interfaces/Link'

type ILink = {
  color?: 'blue' | 'black' | 'red'
  disabled?: boolean
  target?: string
  children?: ReactNode
  className?: string
} & ({ href: string } | { link: Link })

export default ILink
