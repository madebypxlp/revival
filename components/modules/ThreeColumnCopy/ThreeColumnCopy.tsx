import React, { FunctionComponent } from 'react'
import styles from './ThreeColumnCopy.module.scss'
import IThreeColumnCopy from './ThreeColumnCopy.interface'

const ThreeColumnCopyModule:FunctionComponent<{ module: IThreeColumnCopy }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Threecolumncopy Module
    </div>
  )
}

export default ThreeColumnCopyModule
