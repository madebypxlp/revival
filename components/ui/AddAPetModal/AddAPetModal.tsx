import React, { FunctionComponent, useState } from 'react'
import styles from './AddAPetModal.module.scss'
import IAddAPetModal from './AddAPetModal.interface'
import Modal from '@components/ui/Modal'
import Input from '../Input/Input'
import { InputError } from '../Input/Input.interface'
import Dropdown from '@components/ui/Dropdown/Dropdown'
import { IDropdownOption } from '@components/ui/Dropdown/Dropdown.interface'

import { handleInputChange } from 'react-select/dist/declarations/src/utils'
import { OnChangeValue } from 'react-select'
import ContentAccordionModule from '@components/modules/ContentAccordion/ContentAccordion'

const AddAPetModal: FunctionComponent<IAddAPetModal> = (props) => {
  console.log(props)

  const [petName, setPetName] = useState<string>()
  const [petType, setPetType] = useState<string>()
  const [petGender, setPetGender] = useState<string>()

  const handleChange = () => {}

  let months = new Array()
  for (let i = 0; i < 12; i++) {
    months[i] = { value: i + 1, label: i + 1 }
  }

  let days = new Array()
  for (let i = 0; i < 31; i++) {
    days[i] = i + 1
  }
  console.log(months)

  return (
    <Modal
      title={'Add a Pet'}
      open={props.open}
      onClose={() => props.onClose()}
    >
      <div className={`${styles.root} default-grid`}>
        <Input
          placeholder="Pet Name"
          type="text"
          onChange={setPetName}
          className="mb-70 col-span-12"
        />

        <Dropdown
          color="light"
          onChange={(o) => setPetType(o?.value)}
          placeholder={'Pet Type'}
          options={[
            { label: 'test', value: 'test' },
            { label: 'test1', value: 'test1' },
          ]}
          className="mb-30 col-span-6"
        />

        <Dropdown
          color="light"
          isMulti={true}
          onChange={console.log}
          placeholder={'Breed'}
          options={[
            { label: 'Husky', value: 'husky' },
            { label: 'Aussie', value: 'aussie' },
          ]}
          className="mb-30 col-span-6"
        />

        <div className="col-span-12 typo-large-paragraph mb-10">Gender</div>
        <div className="col-span-4 flex mb-60">
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
        <div className="col-span-12 typo-large-paragraph mb-10">Birthday</div>
        <Dropdown
          color="light"
          onChange={handleChange}
          placeholder={'Month'}
          options={months}
          className="mb-30 col-span-2"
        />
      </div>
    </Modal>
  )
}

export default AddAPetModal
