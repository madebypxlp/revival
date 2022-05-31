import React, { FunctionComponent } from 'react'
import styles from './FullwidthItemRow.module.scss'
import IFullwidthItemRow from './FullwidthItemRow.interface'

const FullwidthItemRowModule:FunctionComponent<{ module: IFullwidthItemRow }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Fullwidthitemrow Module
    </div>
  )
}

export default FullwidthItemRowModule
