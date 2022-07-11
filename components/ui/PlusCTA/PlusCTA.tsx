import React, { FunctionComponent } from 'react'
import { Plus } from '@components/icons'
import styles from './PlusCTA.module.scss'
import IPlusCTA from './PlusCTA.interface'

const PlusCTA: FunctionComponent<IPlusCTA> = (props) => {
  const { onClick, children, disabled = false } = props

  /**
   * Handle button click if prop is set
   */
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`${styles.root} rounded-focus-box`}
    >
      <div className={styles.icon}>
        <Plus />
      </div>
      <h6>{children}</h6>
    </button>
  )
}

export default PlusCTA
