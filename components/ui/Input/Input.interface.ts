export { default } from './Input'

export default interface IInput {
  className?: string
  placeholder?: string
  type?: string
  isDropdown?: boolean
  variant?: string
  required?: boolean
  onChange?: (...args: any[]) => any
}
