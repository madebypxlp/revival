export { default } from './Input'

export default interface IInput {
  className?: string
  placeholder?: string
  type?: string
  isDropdown?: boolean
  variant?: 'default' | 'blue-outline'
  required?: boolean
  onChange?: (...args: any[]) => any
  onButtonChange?: (...args: any[]) => any
}
