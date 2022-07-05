import React, { FunctionComponent, useState } from 'react'
import styles from './SearchForVetClinicDialog.module.scss'
import ISearchForVetClinicDialog from './SearchForVetClinicDialog.interface'
import Input from '../Input/Input'
import { InputError } from '../Input/Input.interface'
import Button from '../Button/Button'
import Modal from '@components/ui/Modal'
import { ModalActions, ModalContent } from '../Modal/Modal'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import { useIsMobile } from '@commerce/utils/hooks'

const SearchForVetClinicDialog: FunctionComponent<ISearchForVetClinicDialog> = (
  props
) => {
  const { title, open, onClose } = props
  const [searchQueryText, setSearchQueryText] = useState('')
  const isMobile = useIsMobile()

  //TODO
  const handleSubmit = () => {
    console.log('Search', searchQueryText)
  }

  return (
    <Modal title={title} open={open} onClose={() => onClose()}>
      <ModalContent>
        <div className={`${styles.root}`}>
          <div className="-mb-20">
            <h6 className="typo-large-paragraph mb-10">
              Search by one OR more of the following: clinic name, zip, city,
              state, or phone.
            </h6>
            <Input
              className="w-full"
              placeholder={
                isMobile ? 'Search Clinic' : 'Search for Your Veterinary Clinic'
              }
              variant="default"
              type="search"
              icon="search"
              size="small"
              onChange={setSearchQueryText}
              onIconClick={handleSubmit}
            />
          </div>
        </div>
      </ModalContent>
      <ModalActions>
        <Button
          color="yellow"
          variant="large"
          type="default"
          onClick={handleSubmit}
        >
          <span className="px-30">Search</span>
        </Button>
        <ArrowCTA
          orientation="right"
          color="blue"
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
        >
          <span className="text-17">Cancel</span>
        </ArrowCTA>
      </ModalActions>
    </Modal>
  )
}

export default SearchForVetClinicDialog
