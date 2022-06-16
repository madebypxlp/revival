import React from 'react'
import Link from '@components/interfaces/Link'

export default interface IButton {
  variant: 'large' | 'small'
  type: 'default' | 'arrow' | 'plus'
  color: 'yellow' | 'blue' | 'red' | 'white' | 'black'
  outline?: boolean
  disabled?: boolean
  children?: React.ReactNode
  className?: string
  onClick?: (event: Event) => void
  ariaLabel?: string
  href?: string
  target?: string
  link?: Link
}
