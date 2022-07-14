import React, { FunctionComponent, useState } from 'react'
import Translations from 'constants/translations'
import styles from './ModalFlowComponent.module.scss'
import IModalFlowComponent from './ModalFlowComponent.interface'
import Button from '../Button/Button'
import { useUI } from '../context'
import PetAndVetClinicSummary from '../PetAndVetClinicSummary/PetAndVetClinicSummary'
import AddAPetModal from '../AddAPetModal/AddAPetModal'
import SearchForVetClinicDialog from '../SearchForVetClinicDialog/SearchForVetClinicDialog'

const ModalFlowComponent: FunctionComponent<IModalFlowComponent> = (props) => {
  const {
    setModalFlowView,
    modalFlowView,
    displayFlowModal,
    openModalFlow,
    closeModalFlow,
  } = useUI()

  const handleModalRender = () => {
    switch (modalFlowView) {
      case 'CLINIC_INFO_VIEW':
        return (
          <PetAndVetClinicSummary
            title={Translations.PET_AND_VET.SUMMARY_TITLE}
            open={displayFlowModal}
            onClose={closeModalFlow}
          />
        )
      case 'ADD_NEW_PET_VIEW':
        return (
          <AddAPetModal
            title={Translations.PET_AND_VET.ADD_PET_TITLE}
            open={displayFlowModal}
            onClose={() => setModalFlowView('CLINIC_INFO_VIEW')}
          />
        )

      case 'ADD_VET_CLINIC_VIEW':
        return (
          <SearchForVetClinicDialog
            title={Translations.PET_AND_VET.ADD_VET_TITLE}
            open={displayFlowModal}
            onClose={() => setModalFlowView('CLINIC_INFO_VIEW')}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`${styles.root}`}>
      <Button
        color="yellow"
        variant="large"
        type="default"
        onClick={openModalFlow}
      >
        {Translations.PET_AND_VET.EDIT_DETAILS}
      </Button>
      {displayFlowModal && handleModalRender()}
    </div>
  )
}

export default ModalFlowComponent
