import React, { FunctionComponent, useEffect, useState } from 'react'
import Modal from '@components/ui/Modal'
import { useUI } from '@components/ui/context'
import { ForgotPassword, LoginView, SignUpView } from '@components/auth'
import IAuthModal from './AuthModal.interface'

const AuthModal: FunctionComponent<IAuthModal> = ({ open, onClose }) => {
  const { setModalView, displayModal, closeModal, modalView, openModal } =
    useUI()

  const close = () => {
    if (onClose) onClose()
    closeModal()
  }

  useEffect(() => {
    if (open) {
      openModal()
    }
  }, [open])

  return (
    <Modal title="Login to your Account" open={displayModal} onClose={close}>
      {modalView === 'LOGIN_VIEW' && <LoginView />}
      {modalView === 'SIGNUP_VIEW' && <SignUpView />}
      {modalView === 'FORGOT_VIEW' && <ForgotPassword />}
    </Modal>
  )
}

export default AuthModal
