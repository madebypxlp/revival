import React, { FunctionComponent } from 'react'
import styles from './Dropdown.module.scss'
import IDropdown from './Dropdown.interface'

const Dropdown:FunctionComponent<IDropdown> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      Dropdown
    </div>
  )
}

export default Dropdown
