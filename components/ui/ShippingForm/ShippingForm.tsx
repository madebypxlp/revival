import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import Translations from 'constants/translations'
import styles from './ShippingForm.module.scss'
import IShippingForm from './ShippingForm.interface'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import Button from '../Button/Button'
import TextArea from '../TextArea/TextArea'

const ShippingForm: FunctionComponent<IShippingForm> = (props) => {
  const {
    firstName,
    lastName,
    company,
    country,
    addressOne,
    addressTwo,
    city,
    stateProvince,
    phoneNumber,
    postalCode,
    comments,
    onSubmit,
  } = props

  const [shippingData, setShippingData] = useState({
    firstName,
    lastName,
    addressOne,
    addressTwo,
    city,
    stateProvince,
    postalCode,
    phoneNumber,
    country,
    comments,
  })

  const [showStateMessage, setShowStateMessage] = useState(false)

  return (
    <div className={cn(styles.root, 'grid grid-cols-2')}>
      <Input
        placeholder={Translations.SHIPPING_FORM.FIRST_NAME}
        required
        type="text"
        value={firstName}
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, firstName: value }
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
            return { ...prevState, lastName: value }
          })
        }}
        className={styles.formInput}
      />

      <Input
        placeholder={Translations.SHIPPING_FORM.COMPANY}
        type="text"
        value={lastName}
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, company: value }
          })
        }}
        className={styles.formInput}
      />

      <Dropdown
        color="light"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, country: value?.value ?? '' }
          })
        }}
        defaultInputValue={country}
        placeholder={Translations.SHIPPING_FORM.COUNTRY}
        options={[
          { label: 'Country One', value: 'countryOne' },
          { label: 'Country Two', value: 'countryTwo' },
        ]}
        className={styles.formDropdown}
      />

      <Input
        placeholder={Translations.SHIPPING_FORM.ADDRESS_ONE}
        required
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, addressOne: value }
          })
        }}
        className={styles.formInput}
      />

      <Input
        placeholder={Translations.SHIPPING_FORM.ADDRESS_TWO}
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, addressTwo: value }
          })
        }}
        className={styles.formInput}
      />

      <div className={styles.noStateCTA}>
        <ArrowCTA
          orientation="down"
          color="blue"
          onClick={(event: Event) => {
            setShowStateMessage(!showStateMessage)
            event.preventDefault()
          }}
        >
          {Translations.SHIPPING_FORM.DONT_SEE_YOUR_STATE}
        </ArrowCTA>
      </div>

      {showStateMessage && (
        <div className={styles.noStateMessageContainer}>
          {Translations.SHIPPING_FORM.NO_STATE_MESSAGE}
        </div>
      )}

      <Input
        placeholder={Translations.SHIPPING_FORM.CITY}
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
            return { ...prevState, stateProvince: value?.value ?? '' }
          })
        }}
        placeholder={Translations.SHIPPING_FORM.STATE_PROVINCE}
        options={[
          { label: 'State One', value: 'state one' },
          { label: 'State Two', value: 'state two' },
        ]}
        className={styles.formDropdown}
      />

      <Input
        placeholder={Translations.SHIPPING_FORM.POSTAL_CODE}
        required
        type="number"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, postalCode: value }
          })
        }}
        className={styles.formInput}
      />

      <Input
        placeholder={Translations.SHIPPING_FORM.PHONE_NUMBER}
        required
        type="text"
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, phoneNumber: value }
          })
        }}
        className={styles.formInput}
      />

      <TextArea
        placeholder={Translations.SHIPPING_FORM.COMMENTS}
        onChange={(value) => {
          setShippingData((prevState) => {
            return { ...prevState, comments: value }
          })
        }}
        className={cn('col-span-2 mb-50')}
      />

      <div className="col-span-2">
        <Button
          color="yellow"
          variant="large"
          type="default"
          onClick={onSubmit(shippingData)}
        >
          {Translations.SHIPPING_FORM.SAVE_AND_CONTINUE}
        </Button>
      </div>
    </div>
  )
}

export default ShippingForm
