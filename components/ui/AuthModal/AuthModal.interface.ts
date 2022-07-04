export default interface IAuthModal {
  title?: string
  modalView: string
  className?: string
  children?: React.ReactNode
  open?: boolean
  onClose?: () => void
  onEnter?: () => void | null
}
