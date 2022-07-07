import React from 'react'

export default interface IModal {
  title?: string
  styleAction?: string
  className?: string
  children?: React.ReactNode
  open?: boolean
  onClose: () => void
  onEnter?: () => void | null
}
