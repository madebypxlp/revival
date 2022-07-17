import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import Translations from 'constants/translations'
import styles from './ShippingForm.module.scss'
import IShippingForm from './ShippingForm.interface'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'

const ShippingForm: FunctionComponent<IShippingForm> = (props) => {
  const {
    firstName,
    lastName,
    company,
    country,
    addressOne,
    addressTwo,
    phoneNumber,
  } = props

  const [shippingData, setShippingData] = useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: 0,
    country: '',
    phoneNumber: 0,
    email: '',
  })

  return (
    <div className={cn(styles.root, 'grid grid-cols-2')}>
      <Input
        placeholder={Translations.SHIPPING_FORM.FIRST_NAME}
        required
        type="text"
        value={firstName}
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, adress1: value }
          })
        }}
        className={styles.formInput}
      />

      <Input
        placeholder={Translations.SHIPPING_FORM.LAST_NAME}
        required
        type="text"
        value={lastName}
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, adress1: value }
          })
        }}
        className={styles.formInput}
      />

      <Dropdown
        color="light"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, state: value?.value ?? '' }
          })
        }}
        defaultInputValue={company}
        placeholder={Translations.SHIPPING_FORM.COMPANY}
        options={[
          { label: 'Company One', value: 'companyOne' },
          { label: 'Company Two', value: 'companyTwo' },
        ]}
        className={styles.formInput}
      />

      <Dropdown
        color="light"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, state: value?.value ?? '' }
          })
        }}
        placeholder="State"
        options={[
          { label: 'State One', value: 'state one' },
          { label: 'State Two', value: 'state two' },
        ]}
        className={styles.formInput}
      />

      <Input
        placeholder={Translations.SHIPPING_FORM.ADDRESS_ONE}
        required
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, adress1: value }
          })
        }}
        className={styles.formInput}
      />

      <Input
        placeholder="Adress 2"
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, adress2: value }
          })
        }}
        className={styles.formInput}
      />

      <Input
        placeholder="City"
        required
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, city: value }
          })
        }}
        className={styles.formInput}
      />

      <Dropdown
        color="light"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, state: value?.value ?? '' }
          })
        }}
        placeholder="State"
        options={[
          { label: 'State One', value: 'state one' },
          { label: 'State Two', value: 'state two' },
        ]}
        className={styles.formInput}
      />

      <Input
        placeholder="Postal Code"
        required
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, postalCode: +value }
          })
        }}
        className={styles.formInput}
      />

      <Dropdown
        color="light"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, state: value?.value ?? '' }
          })
        }}
        placeholder="Country"
        options={[
          { label: 'Austria', value: 'austria' },
          { label: 'USA', value: 'usa' },
        ]}
        className={styles.formInput}
      />

      <Input
        placeholder="Phone Number"
        required
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, phoneNumber: +value }
          })
        }}
        className={styles.formInput}
      />
      <Input
        placeholder="Email Adress"
        required
        type="email"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, email: value }
          })
        }}
        className={styles.formInput}
      />
    </div>
  )
}

export default ShippingForm
