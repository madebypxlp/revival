import React, { FunctionComponent } from 'react'
import styles from './ChipLinks.module.scss'
import IChipLinks from './ChipLinks.interface'

const ChipLinksModule:FunctionComponent<{ module: IChipLinks }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Chiplinks Module
    </div>
  )
}

export default ChipLinksModule
