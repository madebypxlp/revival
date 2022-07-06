import React, { Fragment, FunctionComponent, useState } from 'react'
import styles from './PetAndVetClinicSummary.module.scss'
import IPetAndVetClinicSummary from './PetAndVetClinicSummary.interface'
import Modal from '@components/ui/Modal'
import { ModalActions, ModalContent } from '../Modal/Modal'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import Input from '../Input/Input'
import Dropdown from '@components/ui/Dropdown/Dropdown'
import { IDropdownOption } from '@components/ui/Dropdown/Dropdown.interface'
import PlusCTA from '../PlusCTA/PlusCTA'
import { divide } from 'lodash'

const PetAndVetClinicSummary: FunctionComponent<IPetAndVetClinicSummary> = (
  props
) => {
  const { title, open, onClose } = props

  const [petType, setPetType] = useState<Object>()
  const [petCount, setPetCount] = useState<number>()
  const [addPetCount, setAddPetCount] = useState(1)

  console.log(petType)

  const handleAddPet = () => {
    setAddPetCount((prev) => {
      return prev + 1
    })
  }

  return (
    <Modal title={title || 'Add a Pet'} open={open} onClose={() => onClose()}>
      <ModalContent>
        <div className={`${styles.root} pt-10 pb-20 default-grid`}>
          <div className={`${styles.border} mb-40 col-span-2 md:col-span-12`} />
          <h3 className="typo-h6 text-blue mb-5 col-span-2 md:col-span-6">
            1. Which pet(s) is this prescription for?
          </h3>
          <p className="typo-legal-text mb-30 col-span-2 md:col-span-6 md:col-start-1">
            You can add multiple pets and adjust quantities for each pet as
            needed
          </p>

          {new Array(addPetCount).fill('').map((v, index) => {
            return (
              <Fragment key={index}>
                <Dropdown
                  color="light"
                  onChange={(o) =>
                    setPetType((prevState) => {
                      return { ...prevState, [index]: o?.value }
                    })
                  }
                  placeholder={'Pet Type'}
                  options={[
                    { label: 'Cat', value: 'cat' },
                    { label: 'Dog', value: 'dog' },
                  ]}
                  className="col-span-2 md:col-span-6 md:col-start-1 pb-25"
                />
                <div className="col-span-3 ml-30 self-center">
                  <Input
                    incrementerButtons
                    placeholder="0"
                    type="number"
                    onChange={(value) => setPetCount(+value)}
                  />
                </div>
              </Fragment>
            )
          })}

          <div className="col-span-2 md:col-span-12 flex justify-between">
            <PlusCTA onClick={handleAddPet}>Add Another Pet</PlusCTA>

            <Button variant="large" color="yellow" className="">
              Add A New Pet
            </Button>
          </div>
          <div className={`${styles.border} my-40 col-span-2 md:col-span-12`} />
          <h3 className="typo-h6 text-blue col-span-2 md:col-span-6">
            2. Select Your Vet Clinic(s)
          </h3>
          <div className="col-span-2 md:col-span-12 flex justify-end">
            <Button
              variant="large"
              color="yellow"
              className="col-span-2 col-start-1"
            >
              Add A Vet Clinic
            </Button>
          </div>
          <div className={`${styles.border} my-40 col-span-2 md:col-span-12`} />
          <h3 className="typo-h6 text-blue col-span-2 md:col-span-6">
            3. What’s your preferred approval method?
          </h3>
        </div>
      </ModalContent>
      <ModalActions>
        <Button variant="large" color="yellow">
          Update
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default PetAndVetClinicSummary
