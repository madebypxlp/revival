import { MouseEventHandler, ReactNode } from 'react'

export type InputError = false | 'invalid' | 'required'

export default interface IInput {
  className?: string
  placeholder?: string
  type?: string
  isDropdown?: boolean
  variant?: 'default' | 'blue-outline'
  required?: boolean
  onChange?: (arg0: string, arg1: InputError) => any
  onIconClick?: MouseEventHandler
  status?: ReactNode
}
