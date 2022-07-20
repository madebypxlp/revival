import React, { FunctionComponent, useState } from 'react'
import Modal from '@components/ui/Modal'
import Dropdown from '@components/ui/Dropdown/Dropdown'

import IAddAPetModal from './AddAPetModal.interface'
import styles from './AddAPetModal.module.scss'
import { ModalActions, ModalContent } from '../Modal/Modal'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import AddAPetForm from '../AddAPetForm/AddAPetForm'

const AddAPetModal: FunctionComponent<IAddAPetModal> = (props) => {
  const { title, open, onClose } = props

  const events = {
    triggerSubmit: () => {},
  }

  return (
    <Modal title={title || 'Add a Pet'} open={open} onClose={() => onClose()}>
      <ModalContent>
        <AddAPetForm onSubmit={onClose} events={events} />
      </ModalContent>
      <ModalActions>
        <Button
          variant="large"
          color="yellow"
          onClick={() => events.triggerSubmit()}
        >
          Done
        </Button>
        <ArrowCTA
          orientation="right"
          color="blue"
          onClick={() => typeof onClose === 'function' && onClose()}
        >
          Cancel
        </ArrowCTA>
      </ModalActions>
    </Modal>
  )
}

export default AddAPetModal
