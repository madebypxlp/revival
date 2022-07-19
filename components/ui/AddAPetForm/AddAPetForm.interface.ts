import { IPet } from '../ModalFlowComponent/ModalFlowContext'

export default interface IAddAPetForm {
  initialData?: IPet
  onSubmit?: (arg0: IPet) => void
  events?: {
    triggerSubmit: () => void
  }
}
