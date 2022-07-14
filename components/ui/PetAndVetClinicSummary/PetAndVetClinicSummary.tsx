import React, { Fragment, FunctionComponent, useState } from 'react'
import Modal from '@components/ui/Modal'
import Dropdown from '@components/ui/Dropdown/Dropdown'
import { IDropdownOption } from '@components/ui/Dropdown/Dropdown.interface'
import cn from 'classnames'
import styles from './PetAndVetClinicSummary.module.scss'
import IPetAndVetClinicSummary from './PetAndVetClinicSummary.interface'
import { ModalActions, ModalContent } from '../Modal/Modal'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import Input from '../Input/Input'
import PlusCTA from '../PlusCTA/PlusCTA'
import SearchResultCard from '../SearchForVetClinicResult/SearchForVetClinicResult'
import CartProduct from '../CartProduct/CartProduct'
import { SAMPLE_PRODUCT } from '../ComponentRenderer/ComponentRenderer'

const PetAndVetClinicSummary: FunctionComponent<IPetAndVetClinicSummary> = (
  props
) => {
  const { title, open, onClose } = props

  const [petType, setPetType] = useState<Object>()
  const [petCount, setPetCount] = useState<Object>({ 0: 0 })
  const [addPetCount, setAddPetCount] = useState(1)

  const handleAddPet = () => {
    setAddPetCount((prev) => prev + 1)
  }

  const dummyClinic = {
    clinic: 'Beach City Animal Hospital - Redondo Beach',
    address: '2147 Warner Ave, Redondo Beach, CA 90277',
    phone: '(949) 500-1000',
  }
  const clinics = [dummyClinic, dummyClinic]

  return (
    <Modal title={title || 'Add a Pet'} open={open} onClose={() => onClose()}>
      <ModalContent>
        <div className={`${styles.root} pt-10 default-grid`}>
          <CartProduct
            className={cn(styles.product, 'mb-30')}
            product={SAMPLE_PRODUCT}
            quantity={3}
            variant="cart"
            rightColumn="empty"
            showPrescriptionIcon
            showPrescriptionLabel
            showPrescriptionExtraInfo
          />

          <div className={`${styles.border} mb-40 col-span-2 md:col-span-12`} />
          <h3 className="typo-h6 text-blue mb-5 col-span-2 md:col-span-6">
            1. Which pet(s) is this prescription for?
          </h3>
          <p className="typo-legal-text mb-30 col-span-2 md:col-span-6 md:col-start-1">
            You can add multiple pets and adjust quantities for each pet as
            needed
          </p>

          {new Array(addPetCount).fill('').map((v, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              <Dropdown
                color="light"
                onChange={(o) =>
                  setPetType((prevState) => {
                    return { ...prevState, [index]: o?.value }
                  })
                }
                placeholder="Pet Type"
                options={[
                  { label: 'Cat', value: 'cat' },
                  { label: 'Dog', value: 'dog' },
                ]}
                className="col-span-2 md:col-span-6 md:col-start-1 mb-25"
              />
              <div className="col-span-2 md:col-span-3 md:ml-30 ml-0 self-center">
                <Input
                  incrementerButtons
                  placeholder="0"
                  type="number"
                  onChange={(value) =>
                    setPetCount((prevState) => {
                      return { ...prevState, [index]: +value }
                    })
                  }
                />
              </div>
            </Fragment>
          ))}

          <div className="col-span-2 md:col-span-12 flex justify-between flex-col md:flex-row">
            <div className="mb-20 md:mb-0">
              <PlusCTA onClick={handleAddPet}>Add Another Pet</PlusCTA>
            </div>

            <Button variant="large" color="yellow" className="">
              Add A New Pet
            </Button>
          </div>
          <div className={`${styles.border} my-40 col-span-2 md:col-span-12`} />
          <h3 className="typo-h6 text-blue col-span-2 md:col-span-6 mb-35">
            2. Select Your Vet Clinic(s)
          </h3>
          <div className="col-span-2 md:col-span-9 -mr-10">
            {clinics &&
              clinics.map((clinic) => (
                <SearchResultCard
                  noButton
                  key={clinic.clinic}
                  clinic={clinic.clinic}
                  address={clinic.address}
                  phone={clinic.phone}
                />
              ))}
          </div>

          <div className="col-span-2 md:col-span-12 flex justify-center md:justify-end ">
            <Button variant="large" color="yellow" className="mt-10 mb:mt-0">
              Add A Vet Clinic
            </Button>
          </div>
          <div className={`${styles.border} my-40 col-span-2 md:col-span-12`} />
          <h3 className="typo-h6 text-blue col-span-2 md:col-span-6 mb-35">
            3. What’s your preferred approval method?
          </h3>
          <div className="col-span-2 md:col-span-12">
            <div className="flex items-start mb-20 md:mb-0">
              <Input name="method" className="basis-20" type="radio" square />
              <div className="typo-fact">Contact my vet clinic for me</div>
            </div>
            <div className="flex items-start">
              <Input
                name="method"
                className="md:-mb-30 basis-20"
                type="radio"
                square
              />
              <div className="typo-fact">
                I will mail the prescription to Revival Animal Health myself.
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
      <ModalActions>
        <Button variant="large" color="yellow">
          Done
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default PetAndVetClinicSummary
