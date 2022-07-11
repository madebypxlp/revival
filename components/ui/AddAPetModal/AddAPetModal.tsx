import React, { FunctionComponent, useState } from 'react'
import Modal from '@components/ui/Modal'
import Dropdown from '@components/ui/Dropdown/Dropdown'

import Input from '../Input/Input'
import IAddAPetModal from './AddAPetModal.interface'
import styles from './AddAPetModal.module.scss'
import { ModalActions, ModalContent } from '../Modal/Modal'
import Button from '../Button/Button'
import ArrowCTA from '../ArrowCTA/ArrowCTA'

const AddAPetModal: FunctionComponent<IAddAPetModal> = (props) => {
  const { title, open, onClose } = props

  const [petName, setPetName] = useState<string>()
  const [petType, setPetType] = useState<string>()
  const [petGender, setPetGender] = useState<string>()
  const [petBreed, setPetBreed] = useState<string[]>()
  const [petWeight, setPetWeight] = useState<string>()
  const [petBirthDay, setPetBirthDay] = useState<string>()
  const [petBirthMonth, setPetBirthMonth] = useState<string>()
  const [petBirthYear, setPetBirthYear] = useState<string>()
  const [petMedication, setPetMedication] = useState<string[]>()
  const [petAllergies, setPetAllergies] = useState<string[]>()
  const [petExistingCondition, setPetExistingCondition] = useState<string[]>()

  const handleChange = () => {}

  const months = []
  for (let i = 1; i <= 12; i += 1) {
    months[i] = { value: String(i), label: String(i) }
  }

  const days = []
  for (let i = 1; i <= 31; i += 1) {
    days[i] = { value: String(i), label: String(i) }
  }

  const unformattedYears = Array.from(
    { length: 51 },
    (_, i) => new Date().getFullYear() - i
  )

  const years = []
  for (let i = 1; i <= 51; i += 1) {
    years[i] = {
      value: String(unformattedYears[i]),
      label: String(unformattedYears[i]),
    }
  }

  return (
    <Modal title={title || 'Add a Pet'} open={open} onClose={() => onClose()}>
      <ModalContent>
        <div className={`${styles.root} pt-10 pb-20`} />
        <div className="default-grid">
          <Input
            placeholder="Pet Name"
            type="text"
            onChange={setPetName}
            className="mb-40 col-span-2 md:col-span-12"
          />

          <Dropdown
            color="light"
            onChange={(o) => setPetType(o?.value)}
            placeholder="Pet Type"
            options={[
              { label: 'Cat', value: 'cat' },
              { label: 'Dog', value: 'dog' },
            ]}
            className="mb-30 col-span-2 md:col-span-6"
          />

          <Dropdown
            color="light"
            isMulti
            onChange={(a) => setPetBreed(a.map((v) => v.value))}
            placeholder="Breed"
            options={[
              { label: 'Husky', value: 'husky' },
              { label: 'Aussie', value: 'aussie' },
            ]}
            className="mb-30 col-span-2 md:col-span-6"
          />
          <div className="col-span-2 md:col-span-12 typo-large-paragraph mb-10">
            Gender
          </div>
          <div className="col-span-2 lg:col-span-4 flex mb-30 -ml-5">
            <Input
              type="radio"
              name="gender"
              onChange={(checked) => checked && setPetGender('male')}
              square
              label="Male"
              className=""
            />
            <Input
              type="radio"
              name="gender"
              square
              onChange={(checked) => checked && setPetGender('female')}
              label="Female"
              className=""
            />
          </div>
          <div className="col-span-2 md:col-span-12 typo-large-paragraph mb-10">
            Birthday
          </div>
          <Dropdown
            color="light"
            onChange={(o) => setPetBirthMonth(o?.value)}
            placeholder="Month"
            options={months}
            className="col-span-2 md:col-span-4 lg:col-span-2 mb-10 md:mb-0"
          />

          <Dropdown
            color="light"
            onChange={(o) => setPetBirthDay(o?.value)}
            placeholder="Day"
            options={days}
            className="col-span-2 md:col-span-4  lg:col-span-2 mb-10 md:mb-0"
          />

          <Dropdown
            color="light"
            onChange={(o) => setPetBirthYear(o?.value)}
            placeholder="Year"
            options={years}
            className="col-span-2 md:col-span-4 lg:col-span-2"
          />

          <Input
            placeholder="Weight (lb)"
            type="number"
            onChange={setPetWeight}
            className="col-span-2 md:col-span-12 lg:col-span-6 mt-10 lg:mt-0"
          />
          <div className="text-14 mb-50 col-span-2 md:col-span-12 lg:col-span-7 lg:pr-150 -mt-20">
            If you don’t know your pet’s exact birthdate, use an approximite
            date instead.
          </div>
        </div>

        <div className="default-grid items-center">
          <Dropdown
            color="light"
            isMulti
            onChange={(a) => setPetMedication(a.map((v) => v.value))}
            placeholder="Medication"
            options={[
              { label: 'Adeaquan', value: 'Adeaquan' },
              { label: 'SecondOption', value: 'SecondOption' },
            ]}
            className="col-span-6 pb-25"
          />

          <Input
            square
            type="checkbox"
            className="col-span-4 self-center"
            label="none"
            onChange={(checked) => checked && setPetMedication([])}
          />

          <Dropdown
            color="light"
            isMulti
            onChange={(a) => setPetAllergies(a.map((v) => v.value))}
            placeholder="Allergies"
            options={[
              { label: 'Allergie1', value: 'Allergie1' },
              { label: 'Allergie2', value: 'Allergie2' },
            ]}
            className="col-span-6 pb-25"
          />
          <Input
            square
            type="checkbox"
            className="col-span-4 self-center"
            label="none"
            onChange={console.log}
          />

          <Dropdown
            color="light"
            isMulti
            onChange={(a) => setPetExistingCondition(a.map((v) => v.value))}
            placeholder="Pre-Existing Conditions"
            options={[
              { label: 'Condition1', value: 'Condition1' },
              { label: 'Condition2', value: 'Condition2' },
            ]}
            className="col-span-6 pb-25"
          />
          <Input
            square
            type="checkbox"
            className="col-span-4"
            label="none"
            onChange={console.log}
          />
        </div>
      </ModalContent>
      <ModalActions>
        <Button variant="large" color="yellow">
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
