import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'
import IButton from './Button.interface'

const Button:FunctionComponent<IButton> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      Button
    </div>
  )
}

export default Button
