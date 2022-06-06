import React, { FunctionComponent } from 'react'
import styles from './Tag.module.scss'
import ITag from './Tag.interface'

const Tag: FunctionComponent<ITag> = (props) => {
  const { label, variant } = props
  return <div className={`${styles.root} ${styles[variant]}`}>{label}</div>
}

export default Tag
