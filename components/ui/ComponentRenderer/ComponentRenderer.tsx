/*  eslint-disable */
import React, { FunctionComponent, useState } from 'react'
import Translations from 'constants/translations'
import styles from './ComponentRenderer.module.scss'
import IComponentRenderer from './ComponentRenderer.interface'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'
import PlusCTA from '../PlusCTA/PlusCTA'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import Link from '../Link/Link'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'
import Video from '../VideoComponent/VideoComponent'
import { InputError } from '../Input/Input.interface'
import AccountHero from '../AccountHero/AccountHero'
import Accordion from '../Accordion/Accordion'
import SearchForVetClinicDialog from '../SearchForVetClinicDialog/SearchForVetClinicDialog'
import AddAPetModal from '../AddAPetModal/AddAPetModal'
import ModalFlowComponent from '../ModalFlowComponent/ModalFlowComponent'
import LoginModal from '../AuthModal/AuthModal'
import AddCustomVetClinic from '../AddCustomVetClinic/AddCustomVetClinic'
import { useUI } from '../context'
import CartProduct from '../CartProduct/CartProduct'
import AccountSettings from '../AccountSettings/AccountSettings'
import PetAndVetClinicSummary from '../PetAndVetClinicSummary/PetAndVetClinicSummary'
import IProductCard from '../ProductCard/ProductCard.interface'
import { Product } from '@commerce/types'
import { LineItem } from '@framework/types'

const ComponentRenderer: FunctionComponent<IComponentRenderer> = () => {
  // test for inputfield
  const handleChange = (value: string, error: InputError) => {
    console.log(value)
    console.log(error)
  }

  const { setModalView, openModal } = useUI()
  const [openAccordion, setOpenAccordion] = useState(0)
  const [petModalOpen, setPetModalOpen] = useState(false)
  const [addClinicModalOpen, setAddClinicModalOpen] = useState(false)
  const [modalOpenSearch, setModalOpenSearch] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [petVetSummaryOpen, setPetVetSummaryOpen] = useState(false)

  const petAndVetInfo = {
    approvalMethod:
      'I will mail the prescription to Revival Animal Health myself.',
    info: [
      {
        vet: 'Arbor Animal Hospital - Irvive',
        pet: 'Ellie',
        quantity: 2,
      },
      {
        vet: 'Arbor Animal Hospital - Irvive',
        pet: 'Ellie',
        quantity: 2,
      },
    ],
  }

  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <div style={{ background: 'orange' }}>
          <h1>Hyperlinks</h1>
          <Link color="blue" href="/our-story">
            Hello World Hyperlink
          </Link>
          <Link disabled color="blue" href="/our-story">
            Hello World Hyperlink
          </Link>
        </div>
        <div style={{ background: 'orange' }}>
          <h1>Arrow CTA</h1>
          <ArrowCTA
            orientation="down"
            color="black"
            href="https://revival-wp.weareenvoy.net/our-story"
          >
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
          <ArrowCTA orientation="right" color="blue" href="https://google.com">
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
          <ArrowCTA orientation="up" color="white" href="/our-story">
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
          <ArrowCTA disabled orientation="up" color="white" href="/our-story">
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
        </div>
        <div>
          <h1>Plus CTA</h1>
          <PlusCTA href="/our-story">Add to cart</PlusCTA>
          <br />
          <PlusCTA onClick={() => console.log('clicked')}>Add to cart</PlusCTA>
          <br />
          <PlusCTA disabled onClick={() => console.log('clicked')}>
            Add to cart
          </PlusCTA>
        </div>
        <h1>Tags</h1>
        <Tag label="Hello World" variant="blue-filled" />
        <Tag label="Hello World" variant="blue-outline" />
        <Tag label="Hello World" variant="red-filled" />
        <div>
          <div style={{ background: 'orange' }}>
            <h1>Buttons</h1>
            <Button color="yellow" variant="large" type="default">
              Hello World
            </Button>
            <Button color="red" variant="small" type="default">
              Hello World
            </Button>
            <Button color="blue" variant="small" type="default">
              Hello World
            </Button>
            <Button color="black" variant="small" type="default">
              Hello World
            </Button>
            <Button color="white" variant="small" type="default">
              Hello World
            </Button>
            <br /> <br />
            <Button outline color="yellow" variant="large" type="default">
              Hello World
            </Button>
            <Button outline color="red" variant="small" type="default">
              Hello World
            </Button>
            <Button outline color="blue" variant="small" type="default">
              Hello World
            </Button>
            <Button outline color="black" variant="small" type="default">
              Hello World
            </Button>
            <Button outline color="white" variant="small" type="default">
              Hello World
            </Button>
            <br /> <br />
            <Button disabled color="white" variant="small" type="default">
              Hello World
            </Button>
            <Button
              disabled
              outline
              color="white"
              variant="small"
              type="default"
            >
              Hello World
            </Button>
            <Button
              disabled
              outline
              color="blue"
              variant="small"
              type="default"
            >
              Hello World
            </Button>
            <Button disabled color="red" variant="small" type="default">
              Hello World
            </Button>
            <Button
              type="default"
              variant="large"
              color="yellow"
              href="https://revival-wp.weareenvoy.net/our-story"
            >
              internal link test
            </Button>
          </div>
        </div>
        <div>
          <h1>Input</h1>
          <form action="">
            <Input
              placeholder="emailTest"
              type="email"
              onChange={handleChange}
              className=""
              required
            />
            <Input
              className=""
              placeholder="TextTest"
              type="text"
              onChange={handleChange}
              required
            />
            <Input
              className=""
              placeholder="TextTest2"
              type="text"
              onChange={handleChange}
              variant="blue-outline"
            />
          </form>
        </div>
        <div className="my-50 py-50">
          <h1>Accordion</h1>
          <Accordion
            headline="Schedule"
            open={openAccordion === 0}
            onOpen={() => setOpenAccordion(0)}
          />
          <Accordion
            headline="Education/Experience"
            open={openAccordion === 1}
            onOpen={() => setOpenAccordion(1)}
          />
          <Accordion
            headline="Hello World"
            open={openAccordion === 2}
            onOpen={() => setOpenAccordion(2)}
          />
        </div>
        <div>
          <h1>Modals</h1>

          <Button
            color="yellow"
            variant="large"
            type="default"
            onClick={() => setPetVetSummaryOpen(true)}
          >
            Pet Vet Summary
          </Button>
          <PetAndVetClinicSummary
            title="Add Custom Vet Clinic"
            open={petVetSummaryOpen}
            onClose={() => setPetVetSummaryOpen(false)}
          />

          <Button
            color="yellow"
            variant="large"
            type="default"
            onClick={() => setAddClinicModalOpen(true)}
          >
            Add Custom Vet Clinic
          </Button>
          <AddCustomVetClinic
            title="Add Custom Vet Clinic"
            open={addClinicModalOpen}
            onClose={() => setAddClinicModalOpen(false)}
          />

          <Button
            color="yellow"
            variant="large"
            type="default"
            onClick={() => setPetModalOpen(true)}
          >
            Add a Pet
          </Button>
          <AddAPetModal
            title="Add a Pet"
            open={petModalOpen}
            onClose={() => setPetModalOpen(false)}
          />

          <Button
            color="yellow"
            variant="large"
            type="default"
            onClick={() => setModalOpenSearch(true)}
          >
            Search Vet Clinic
          </Button>
          <SearchForVetClinicDialog
            title="Search for Your Veterinary Clinic"
            open={modalOpenSearch}
            onClose={() => setModalOpenSearch(false)}
          />

          <Button
            color="yellow"
            variant="large"
            type="default"
            onClick={() => {
              setModalView('LOGIN_VIEW')
              openModal()
            }}
          >
            Login
          </Button>
          <LoginModal title="Title" />

          <br />
          <br />
          <br />
          <br />
          <h3>ModalFlow</h3>
          <ModalFlowComponent />
        </div>
      </div>
      <div className="my-50 py-50">
        <h1>Account Hero</h1>
        <AccountHero headline="Welcome Back, Marie" />
        <AccountSettings />
      </div>
      <div className="my-50 py-50 container">
        <h1>Product components</h1>
        <div className="default-grid">
          {/* 1) Cart (your cart) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            showCartControls
          />
          {/* 2) Cart (checkout 01A) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="checkout"
          />
          {/* 3) RX Cart flow */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            showPrescriptionIcon
            showCartControls
          />
          {/* 4) RX (checkout 01A)  */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="checkout"
            showPrescriptionLabel
          />
          {/* 5) RX Flow (info needed) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            rightColumn="empty"
            showPrescriptionIcon
            showPrescriptionLabel
            showPrescriptionExtraInfo
          />
          {/* 6) RX Flow (pet and vet clinic info) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            rightColumn="edit-details"
            showPrescriptionIcon
            vetInfo={petAndVetInfo}
          />
          {/* 7) Splitting shipments cart */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            shippingRestrictionsMessage="1-Day Shipping Delay for this item"
            showCartControls
          />
          {/* 8) Splitting shipments (checkout) */}
          <CartProduct
            className="my-20"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="checkout"
            shippingRestrictionsMessage="1-Day Shipping Delay for this item"
          />
          {/* 9) Account (not finished, do not use yet) */}
          <CartProduct
            className="my-20"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="account"
          />
        </div>
      </div>

      <div className="my-50 py-50 container">
        <h1>Product components</h1>
        <div className="default-grid">
          {/* 1) Cart (your cart) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            showCartControls
          />
          {/* 2) Cart (checkout 01A) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="checkout"
          />
          {/* 3) RX Cart flow */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            showPrescriptionIcon
            showCartControls
          />
          {/* 4) RX (checkout 01A)  */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="checkout"
            showPrescriptionLabel
          />
          {/* 5) RX Flow (info needed) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            rightColumn="empty"
            showPrescriptionIcon
            showPrescriptionLabel
            showPrescriptionExtraInfo
          />
          {/* 6) RX Flow (pet and vet clinic info) */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            rightColumn="edit-details"
            showPrescriptionIcon
            vetInfo={petAndVetInfo}
          />
          {/* 7) Splitting shipments cart */}
          <CartProduct
            className="my-20 md:col-start-1"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="cart"
            shippingRestrictionsMessage="1-Day Shipping Delay for this item"
            showCartControls
          />
          {/* 8) Splitting shipments (checkout) */}
          <CartProduct
            className="my-20"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="checkout"
            shippingRestrictionsMessage="1-Day Shipping Delay for this item"
          />
          {/* 9) Account (order detail) */}
          <CartProduct
            className="my-20"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="account"
            showBuyItAgain
          />
          {/* 10) Account (order detail RX) */}
          <CartProduct
            className="my-20"
            product={SAMPLE_PRODUCT}
            currencyCode="USD"
            variant="account"
            showPrescriptionIcon
            showPrescriptionLabel
            showPrescriptionExtraInfo
            showBuyItAgain
          />
        </div>
      </div>
    </div>
  )
}

export default ComponentRenderer

export const SAMPLE_PRODUCT = {
  discounts: [],
  id: '41f6da4e-8f3a-4d5a-a914-030c89d1bf98',
  name: 'Duramune Max 5',
  path: 'duramune-max-5',
  productId: '124',
  quantity: 1,
  variantId: '91',
  variant: {
    id: '91',
    image: {
      url: 'https://cdn11.bigcommerce.com/s-3xvwarb9yi/product…s/463/30301-415__31796.1657567018.220.290.jpg?c=1',
    },
    listPrice: 130.99,
    name: 'Duramune Max 5',
    price: 130.99,
    requiresShipping: true,
    sku: '30301-415',
  },
} as LineItem
