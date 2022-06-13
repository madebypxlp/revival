import React, { FunctionComponent } from 'react'
import styles from './Dropdown.module.scss'
import IDropdown, { IDropdownOption } from './Dropdown.interface'
import Select, { components, DropdownIndicatorProps } from 'react-select'
import DropdownIcon from '@components/icons/DropdownIcon'
import c from 'classnames'

const DropdownIndicator = (props: DropdownIndicatorProps<IDropdownOption>) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon className="w-12 text-blue" />
    </components.DropdownIndicator>
  )
}

const Dropdown: FunctionComponent<IDropdown> = (props) => {
  const { className, ...rest } = props

  return (
    <Select
      className={c(styles.root, className)}
      classNamePrefix={'select'}
      isSearchable={false}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
      // debug styling:
      // menuIsOpen={true}
      {...rest}
    />
  )
}

export default Dropdown
