import { MouseEventHandler, ReactNode } from 'react'

export type InputError = false | 'invalid' | 'required'

type IInput = {
  className?: string
  placeholder?: string
  variant?: 'default' | 'blue-outline'
  size?: 'default' | 'small'
  weight?: 'default' | 'bold'
  icon?: 'arrow' | 'search'
  label?: string
  name?: string
  required?: boolean
  onIconClick?: MouseEventHandler
  status?: ReactNode
  multiple?: boolean
  type: string
  square?: boolean
  onChange?: (arg0: string, arg1: InputError) => any
} & (
  | {
      type: 'checkbox' | 'radio'
      onChange?: (arg0: boolean, arg1: InputError) => any
    }
  | {
      type: 'file'
      onChange?: (arg0: FileList | false, arg1: InputError) => any
    }
  | {
      type:
        | 'text'
        | 'textarea'
        | 'number'
        | 'email'
        | 'password'
        | 'date'
        | 'search'
        | 'tel'
      onChange?: (arg0: string, arg1: InputError) => any
    }
)

export default IInput
