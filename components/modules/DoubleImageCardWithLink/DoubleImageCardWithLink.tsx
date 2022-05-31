import React, { FunctionComponent } from 'react'
import styles from './DoubleImageCardWithLink.module.scss'
import IDoubleImageCardWithLink from './DoubleImageCardWithLink.interface'

const DoubleImageCardWithLinkModule:FunctionComponent<{ module: IDoubleImageCardWithLink }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Doubleimagecardwithlink Module
      {console.log(module)}
    </div>
  )
}

export default DoubleImageCardWithLinkModule
