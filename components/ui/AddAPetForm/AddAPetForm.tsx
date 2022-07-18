import React, { FunctionComponent, useState, useEffect } from 'react'
import styles from './AddAPetForm.module.scss'
import IAddAPetForm from './AddAPetForm.interface'
import { useUI } from '../context'

import { IPet } from '../ModalFlowComponent/ModalFlowContext'

import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'

const AddAPetForm: FunctionComponent<IAddAPetForm> = (props) => {
  const { addPetData } = useUI()
  const { onSubmit, initialData } = props

  const defaultState: IPet = {
    name: '',
    type: '',
    gender: '',
    breed: [],
    weight: '',
    birthday: '',
    birthMonth: '',
    birthYear: '',
    medication: [],
    allergies: [],
    existingCondition: [],
  }

  const [petData, setPetData] = useState<IPet>(initialData || defaultState)

  const handleChange = () => {}

  const handleCommit = () => {
    addPetData(petData)
    if (typeof onSubmit === 'function') onSubmit(petData)
  }

  useEffect(() => {
    if (props?.events) props.events.triggerSubmit = handleCommit
  }, [])

  const months = []
  for (let i = 0; i < 12; i++) {
    months[i] = { value: String(i + 1), label: String(i + 1) }
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
    <div className={`${styles.root}`}>
      <div className={`${styles.root} pt-10 pb-20`} />
      <div className="default-grid">
        <Input
          placeholder="Pet Name"
          type="text"
          onChange={(v) =>
            setPetData((p) => {
              return { ...p, name: v }
            })
          }
          className="mb-40 col-span-2 md:col-span-12"
        />

        <Dropdown
          color="light"
          onChange={(o) =>
            setPetData((p) => {
              return { ...p, name: String(o?.value) }
            })
          }
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
          onChange={(o) =>
            setPetData((p) => {
              return { ...p, breed: o.map((v) => String(v?.value)) }
            })
          }
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
            onChange={(checked) =>
              checked &&
              setPetData((p) => {
                return { ...p, gender: 'male' }
              })
            }
            square
            label="Male"
            className=""
          />
          <Input
            type="radio"
            name="gender"
            square
            onChange={(checked) =>
              checked &&
              setPetData((p) => {
                return { ...p, gender: 'female' }
              })
            }
            label="Female"
            className=""
          />
        </div>
        <div className="col-span-2 md:col-span-12 typo-large-paragraph mb-10">
          Birthday
        </div>
        <Dropdown
          color="light"
          onChange={(o) =>
            setPetData((p) => {
              return { ...p, birthMonth: String(o?.value) }
            })
          }
          placeholder="Month"
          options={months}
          className="col-span-2 md:col-span-4 lg:col-span-2 mb-10 md:mb-0"
        />

        <Dropdown
          color="light"
          onChange={(o) =>
            setPetData((p) => {
              return { ...p, birthday: String(o?.value) }
            })
          }
          placeholder="Day"
          options={days}
          className="col-span-2 md:col-span-4  lg:col-span-2 mb-10 md:mb-0"
        />

        <Dropdown
          color="light"
          onChange={(o) =>
            setPetData((p) => {
              return { ...p, birthYear: String(o?.value) }
            })
          }
          placeholder="Year"
          options={years}
          className="col-span-2 md:col-span-4 lg:col-span-2"
        />

        <Input
          placeholder="Weight (lb)"
          type="number"
          onChange={(v) =>
            setPetData((p) => {
              return { ...p, weight: v }
            })
          }
          className="col-span-2 md:col-span-12 lg:col-span-6 mt-10 lg:mt-0"
        />
        <div className="text-14 mb-50 col-span-2 md:col-span-12 lg:col-span-7 lg:pr-150 -mt-20">
          If you don’t know your pet’s exact birthdate, use an approximite date
          instead.
        </div>
      </div>

      <div className="default-grid items-center">
        <Dropdown
          color="light"
          isMulti
          onChange={(o) =>
            setPetData((p) => {
              return { ...p, medication: o.map((v) => String(v.value)) }
            })
          }
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
          onChange={(checked) =>
            checked &&
            setPetData((p) => {
              return { ...p, medication: [] }
            })
          }
        />

        <Dropdown
          color="light"
          isMulti
          onChange={(o) =>
            setPetData((p) => {
              return { ...p, allergies: o.map((v) => String(v?.value)) }
            })
          }
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
          onChange={(checked) =>
            checked &&
            setPetData((p) => {
              return { ...p, allergies: [] }
            })
          }
        />

        <Dropdown
          color="light"
          isMulti
          onChange={(checked) =>
            checked &&
            setPetData((p) => {
              return { ...p, existingCondition: [] }
            })
          }
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
          onChange={(checked) =>
            checked &&
            setPetData((p) => {
              return { ...p, existingCondition: [] }
            })
          }
        />
      </div>
    </div>
  )
}

export default AddAPetForm
