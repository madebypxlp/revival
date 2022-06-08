import React from 'react'

export default interface IButton {
  variant: 'large' | 'small'
  type: 'default' | 'arrow' | 'plus'
  color: 'yellow' | 'blue' | 'red' | 'white' | 'black'
  outline?: boolean
  disabled?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
  href?: string
  target?: string
}
