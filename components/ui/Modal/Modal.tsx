import { FC, useRef, useEffect, useCallback } from 'react'
import Portal from '@reach/portal'
import { Cross } from '@components/icons'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import FocusTrap from '@lib/focus-trap'
import IModal from './Modal.interface'
import s from './Modal.module.scss'

export const ModalContent: FC = ({ children }) => (
  <div className={s.modalContent}>{children}</div>
)

export const ModalActions: FC = ({ children }) => (
  <div className={s.modalActions}>{children}</div>
)

const Modal: FC<IModal> = (props) => {
  const { title, className, children, open, onClose, onEnter = null } = props
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
      return () => {}
    },
    [onClose]
  )

  const onClickOutside = () => onClose()

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current, {
          reserveScrollBarGap: true,
        })
        document.documentElement.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKey)
      } else {
        enableBodyScroll(ref.current)
        document.documentElement.style.removeProperty('overflow')
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKey)
      clearAllBodyScrollLocks()
      document.documentElement.style.removeProperty('overflow')
    }
  }, [open, handleKey])

  return (
    <Portal>
      {open ? (
        <div className={s.root} ref={ref}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="bg-none w-full h-full z-0 absolute"
            onClick={onClickOutside}
          />
          <div className={`${s.modal} ${className}`} role="dialog">
            <button
              onClick={() => onClose()}
              aria-label="Close panel"
              className={s.close}
            >
              <Cross className="h-24 w-24 md:w-30 md:h-30" />
            </button>
            {title && <div className={s.modalTitle}>{title}</div>}
            {children}
          </div>
        </div>
      ) : null}
    </Portal>
  )
}

export default Modal
