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
import Link from '@components/ui/Link/Link'
import SearchResultCard from '../SearchForVetClinicResult/SearchForVetClinicResult'

type IClinic = {
  clinic: string
  address: string
  phone: string
}

const SearchForVetClinicDialog: FunctionComponent<ISearchForVetClinicDialog> = (
  props
) => {
  const { title, open, onClose } = props

  const [searchQueryText, setSearchQueryText] = useState('')
  const [clinic, setClinic] = useState<IClinic[]>([])
  const isMobile = useIsMobile()

  const dummyCLinic = {
    clinic: 'Beach City Animal Hospital - Redondo Beach',
    address: '2147 Warner Ave, Redondo Beach, CA 90277',
    phone: '(949) 500-1000',
  }

  //TODO
  const handleSubmit = () => {
    console.log('Search', searchQueryText)

    if (searchQueryText.length === 0) {
      setClinic([])
    } else {
      setClinic([dummyCLinic, dummyCLinic, dummyCLinic, dummyCLinic])
    }
  }

  const SearchResults = (
    <div className="border-t-[1px] border-greyscale-4 py-30 md:py-60">
      <div className="typo-fact pb-5">{`${clinic.length} of ${clinic.length} results `}</div>
      <div>
        {clinic.map((clinic_, idx) => {
          const { clinic, address, phone } = clinic_

          return (
            <SearchResultCard clinic={clinic} address={address} phone={phone} />
          )
        })}
      </div>
    </div>
  )

  const FooterBeforeResults = (
    <div>
      <Button
        className="mr-20"
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
    </div>
  )

  const FooterAfterResults = (
    <div className="my-10">
      <p className="text-15 md:text-18 leading-28">
        Can’t find your clinic?{' '}
        <Link className="inline-block" href={'#'} color="blue">
          Add Information Now.
        </Link>
      </p>
    </div>
  )

  return (
    <Modal title={title} open={open} onClose={() => onClose()}>
      <ModalContent>
        <div className={`${styles.root}`}>
          <div className="-mb-20">
            <h6 className="typo-large-paragraph mb-10">
              Search by one OR more of the following: clinic name, zip, city,
              state, or phone.
            </h6>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit
              }}
            >
              <Input
                className="w-full"
                placeholder={
                  isMobile
                    ? 'Search Clinic'
                    : 'Search for Your Veterinary Clinic'
                }
                variant="default"
                type="search"
                icon="search"
                size="small"
                onChange={setSearchQueryText}
                onIconClick={handleSubmit}
              />
            </form>

            {clinic.length > 1 && SearchResults}
          </div>
        </div>
      </ModalContent>
      <ModalActions>
        {clinic.length > 1 ? FooterAfterResults : FooterBeforeResults}
      </ModalActions>
    </Modal>
  )
}

export default SearchForVetClinicDialog
