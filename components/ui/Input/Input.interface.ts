import { MouseEventHandler, ReactNode } from 'react'

export type InputError = false | 'invalid' | 'required'

export default interface IInput {
  className?: string
  placeholder?: string
  type?: HTMLInputElement['type']
  isDropdown?: boolean
  variant?: 'default' | 'blue-outline'
  size?: 'default' | 'small'
  weight?: 'default' | 'bold'
  icon?: 'arrow' | 'search'
  label?: string
  required?: boolean
  onChange?: (arg0: string | boolean | FileList, arg1: InputError) => any
  onIconClick?: MouseEventHandler
  status?: ReactNode
  multiple?: boolean
}
