import React, { FunctionComponent, useState } from 'react'
import styles from './AccountSettings.module.scss'
import IAccountSettings from './AccountSettings.interface'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'

const AccountSettings: FunctionComponent<IAccountSettings> = (props) => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [shippingData, setShippingData] = useState({
    adress1: '',
    adress2: '',
    city: '',
    state: '',
    postalCode: 0,
    country: '',
    phoneNumber: 0,
    email: '',
  })

  const [paymentData, setPaymentData] = useState({
    name: '',
    cardNumber: 0,
    expDate: 0,
    cvv: 0,
  })

  const [giftCardData, setGiftCardData] = useState({
    name: '',
    expDate: 0,
    cvv: 0,
  })

  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <div className="typo-eyebrow mb-40 md:mb-75">Account</div>
        <div className="default-grid">
          <h3 className="typo-h6 text-blue mb-20 md:mb-40 col-span-2 md:col-span-12">
            Your Profile
          </h3>
          <Input
            placeholder="First Name"
            required
            type="text"
            onChange={(value) => {
              setProfileData((prevState) => {
                return { ...prevState, firstName: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <Input
            placeholder="Last Name"
            required
            type="text"
            onChange={(value) => {
              setProfileData((prevState) => {
                return { ...prevState, lastName: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <Input
            placeholder="Email"
            required
            type="email"
            onChange={(value) => {
              setProfileData((prevState) => {
                return { ...prevState, email: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <Input
            placeholder="Password"
            type="text"
            onChange={(value) => {
              setProfileData((prevState) => {
                return { ...prevState, password: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <div className="col-span-2 md:col-span-12 mb-100">
            <Button color="yellow" variant="large" type="default">
              Save Changes
            </Button>
          </div>

          <h3 className="typo-h6 text-blue mb-20 md:mb-40 col-span-2 md:col-span-12">
            Shipping Adress
          </h3>
          <Input
            placeholder="Adress 1"
            required
            type="text"
            onChange={(value) => {
              setShippingData((prevState) => {
                return { ...prevState, adress1: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />

          <Input
            placeholder="Adress 2"
            type="text"
            onChange={(value) => {
              setShippingData((prevState) => {
                return { ...prevState, adress2: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
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
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
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
            className="col-span-2 md:col-span-5 mb-25 md:mb-70"
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
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
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
            className="col-span-2 md:col-span-5 mb-25 md:mb-70"
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
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
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
            className="col-span-2 col-start-1 md:col-span-5 mb-20 md:mb-40"
          />
          <div className="col-span-2 md:col-span-12 mb-100">
            <Button color="yellow" variant="large" type="default">
              Save Changes
            </Button>
          </div>

          <h3 className="typo-h6 text-blue mb-20 md:mb-40 col-span-2 md:col-span-12">
            Payment Method
          </h3>
          <Input
            placeholder="Name on Card"
            type="text"
            onChange={(value) => {
              setPaymentData((prevState) => {
                return { ...prevState, name: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <Input
            placeholder="Card Number"
            validationType="card_number"
            required
            type="text"
            onChange={(value) => {
              setPaymentData((prevState) => {
                return { ...prevState, cardNumber: +value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <Input
            placeholder="Exp. Date"
            validationType="card_exp_date"
            type="text"
            required
            onChange={(value) => {
              setPaymentData((prevState) => {
                return { ...prevState, expDate: +value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <Input
            placeholder="CVV"
            type="text"
            validationType="card_cvv"
            required
            onChange={(value) => {
              setPaymentData((prevState) => {
                return { ...prevState, cvv: +value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <div className="col-span-2 md:col-span-12 mb-100">
            <Button color="yellow" variant="large" type="default">
              Save Changes
            </Button>
          </div>

          <h3 className="typo-h6 text-blue mb-20 md:mb-40 col-span-2 md:col-span-12">
            Add a Gift Card - Total Balance $XX.XX
          </h3>
          <Input
            placeholder="Name on Card"
            type="text"
            onChange={(value) => {
              setGiftCardData((prevState) => {
                return { ...prevState, name: value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />

          <Input
            placeholder="Exp. Date"
            validationType="card_exp_date"
            type="text"
            onChange={(value) => {
              setGiftCardData((prevState) => {
                return { ...prevState, expDate: +value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <Input
            placeholder="CVV"
            validationType="card_cvv"
            type="text"
            onChange={(value) => {
              setGiftCardData((prevState) => {
                return { ...prevState, cvv: +value }
              })
            }}
            className="col-span-2 md:col-span-5 mb-20 md:mb-40"
          />
          <div className="col-span-2 md:col-span-12  mb-100">
            <Button color="yellow" variant="large" type="default">
              Add Gift Card
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
