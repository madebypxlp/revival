import React, { FunctionComponent } from 'react'
import styles from './SearchForVetClinicResult.module.scss'
import ISearchResultCard from './SearchForVetClinicResult.interface'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useUI } from '../context'

const SearchResultCard: FunctionComponent<ISearchResultCard> = (props) => {
  const { clinic, address, phone, noButton } = props
  const { addClinicData } = useUI()

  const noButtonClass = noButton
    ? 'flex flex-col items-center justify-center md:flex-row md:justify-start md:items-center md:content-start md:px-10 gap-50'
    : 'flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center md:content-start md:px-10 '

  return (
    <div className={`${styles.root} relative my-10`}>
      <div className={noButtonClass}>
        <div className="hidden md:inline-block md:h-full md:w-120">
          <Input
            name="vet"
            className="basis-20  pt-25 pl-35 grow-0"
            type="radio"
            square
          />
        </div>
        <div className="px-20 text-center md:px-0 md:text-left md:-ml-35 ">
          <h6 className="mb-10">{clinic}</h6>
          <div className="typo-fact mb-20 md:mb-0">
            <p>{address}</p>
            <p>{phone}</p>
          </div>
        </div>
        {!noButton && (
          <Button
            className="w-220"
            color="yellow"
            variant="large"
            type="default"
            onClick={() =>
              addClinicData({
                clinic,
                address,
                phone,
              })
            }
          >
            Save
          </Button>
        )}
      </div>
    </div>
  )
}

export default SearchResultCard
