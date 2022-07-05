export default interface IAuthModal {
  title?: string
  className?: string
  children?: React.ReactNode
  open?: boolean
  onClose?: () => void
  onEnter?: () => void | null
}
