import { FC, useRef, useEffect, useCallback } from 'react'
import Portal from '@reach/portal'
import s from './Modal.module.scss'
import { Cross } from '@components/icons'
import IModal from './Modal.interface'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import FocusTrap from '@lib/focus-trap'

const Modal: FC<IModal> = (props) => {
  const { title, className, children, open, onClose, onEnter = null } = props
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current)
        window.addEventListener('keydown', handleKey)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKey)
      clearAllBodyScrollLocks()
    }
  }, [open, handleKey])

  return (
    <Portal>
      {open ? (
        <div className={s.root}>
          <div className={s.modal + ' ' + className} role="dialog" ref={ref}>
            <button
              onClick={() => onClose()}
              aria-label="Close panel"
              className={s.close}
            >
              <Cross className="h-24 w-24 md:w-30 md:h-30" />
            </button>
            {title && <div className={s.modalTitle}>{title}</div>}
            <div className={s.modalContent}>
              <FocusTrap focusFirst>{children}</FocusTrap>
            </div>
          </div>
        </div>
      ) : null}
    </Portal>
  )
}

export default Modal
