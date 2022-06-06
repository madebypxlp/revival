import React from 'react'

export default interface IButton {
  variant?: string
  type?: string
  loading?: boolean
  disabled?: Boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
  style?: any
  href?: string
}
