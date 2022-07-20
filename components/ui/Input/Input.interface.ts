import { MouseEventHandler, ReactNode } from 'react'

export type InputError =
  | false
  | 'invalid_email'
  | 'required'
  | 'invalid_exp_date'
  | 'invalid_cvv'
  | 'invalid_card_number'

type IInput = {
  className?: string
  incrementerButtons?: boolean
  placeholder?: string
  variant?: 'default' | 'blue-outline'
  size?: 'default' | 'small'
  weight?: 'default' | 'bold'
  icon?: 'arrow' | 'search'
  label?: string
  validationType?: 'card_cvv' | 'card_exp_date' | 'card_number'
  name?: string
  required?: boolean
  newsletter?: boolean
  onIconClick?: MouseEventHandler
  onClick?: () => void
  status?: ReactNode
  multiple?: boolean
  type: string
  square?: boolean
  disabled?: boolean
  onChange?: (arg0: string, arg1: InputError) => any
} & (
  | {
      type: 'checkbox' | 'radio'
      checked?: boolean
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
