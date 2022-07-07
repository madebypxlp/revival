import { MouseEventHandler, ReactNode } from 'react'
import Link from '@components/interfaces/Link'

type ILink = {
  color?: 'blue' | 'black' | 'red'
  disabled?: boolean
  target?: string
  children?: ReactNode
  className?: string
  title?: string
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
} & ({ href: string } | { link: Link } | { fakeLink: boolean })

export default ILink
