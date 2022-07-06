import React, { FunctionComponent } from 'react'
import styles from './SearchForVetClinicResult.module.scss'
import ISearchResultCard from './SearchForVetClinicResult.interface'
import Button from '../Button/Button'
import Input from '../Input/Input'

const SearchResultCard: FunctionComponent<ISearchResultCard> = (props) => {
  console.log(props)

  const { clinic, address, phone } = props

  return (
    <div className={`${styles.root} relative my-10`}>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-center md:content-start ">
        <div className="hidden md:inline-block md:h-full md:w-120">
          <Input
            name="vet"
            className="basis-20  pt-25 pl-35 grow-0"
            type="radio"
            square
          />
        </div>
        <div className="px-20 text-center md:px-0 md:text-left md:mr-80">
          <h6 className="mb-10">{clinic}</h6>
          <div className="typo-fact mb-20 md:mb-0">
            <p>{address}</p>
            <p>{phone}</p>
          </div>
        </div>
        <Button className="w-220" color="yellow" variant="large" type="default">
          Save
        </Button>
      </div>
    </div>
  )
}

export default SearchResultCard
