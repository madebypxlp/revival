import React, { FunctionComponent, useState } from 'react'
import styles from './AddCustomVetClinic.module.scss'
import IAddCustomVetClinic from './AddCustomVetClinic.interface'
import Modal from '@components/ui/Modal'
import { ModalActions, ModalContent } from '../Modal/Modal'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import Input from '../Input/Input'

const AddCustomVetClinic: FunctionComponent<IAddCustomVetClinic> = (props) => {
  const { title, open, onClose } = props

  const [clinicName, setClinicName] = useState<string>()
  const [phoneNumberType, setPhoneNumber] = useState<string>()

  return (
    <Modal
      title={title || 'Add Clinic Info'}
      open={open}
      onClose={() => onClose()}
    >
      <ModalContent>
        <div className={`${styles.root} default-grid pt-30 -mb-20`}>
          <Input
            placeholder="Enter Clinic Name"
            type="text"
            onChange={setClinicName}
            className="col-span-2 md:col-span-6"
          />
          <Input
            placeholder="Enter Phone Number"
            type="text"
            onChange={setPhoneNumber}
            className="col-span-2 md:col-span-6"
          />
        </div>
      </ModalContent>
      <ModalActions>
        <Button variant="large" color="yellow">
          Save
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

export default AddCustomVetClinic
