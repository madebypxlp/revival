import React, { FunctionComponent } from 'react'
import styles from './Dropdown.module.scss'
import IDropdown, { IDropdownOption } from './Dropdown.interface'
import Select, { components, DropdownIndicatorProps } from 'react-select'
import DropdownIcon from '@components/icons/DropdownIcon'
import c from 'classnames'

const DropdownIndicator = (
  props: DropdownIndicatorProps<IDropdownOption, boolean>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon className="w-12 text-blue" />
    </components.DropdownIndicator>
  )
}

const Dropdown: FunctionComponent<IDropdown> = (props) => {
  const { className, color = 'default', isMulti = false, ...rest } = props

  return (
    // @ts-expect-error
    <Select
      className={c(
        styles.root,
        className,
        styles['color-' + color],
        isMulti && styles.isMulti
      )}
      classNamePrefix={'select'}
      hideSelectedOptions
      isSearchable={isMulti}
      isMulti={isMulti}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: DropdownIndicator as any,
      }}
      // debug styling:
      // menuIsOpen={true}
      {...rest}
    />
  )
}

export default Dropdown
