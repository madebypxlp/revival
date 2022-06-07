import React, { FunctionComponent } from 'react'
import styles from './PlusCTA.module.scss'
import IPlusCTA from './PlusCTA.interface'
import { Plus } from '@components/icons'

const PlusCTA: FunctionComponent<IPlusCTA> = (props) => {
  const { href, onClick, children, disabled = false } = props

  /**
   * Handle button click if prop is set
   */
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={`${styles.root}`}>
      <div className={styles.icon}>
        <Plus />
      </div>
      <h6>{children}</h6>
    </button>
  )
}

export default PlusCTA
