import { ReactNode } from 'react'
import Link from '@components/interfaces/Link'

type ILink = {
  color?: 'blue' | 'black'
  disabled?: boolean
  target?: string
  children?: ReactNode
  className?: string
} & ({ href: string } | { link: Link })

export default ILink
