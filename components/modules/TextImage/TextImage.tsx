import React, { FunctionComponent } from 'react'
import styles from './TextImage.module.scss'
import ITextImage from './TextImage.interface'

const TextImageModule:FunctionComponent<{ module: ITextImage }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Textimage Module
      {console.log(module)}
    </div>
  )
}

export default TextImageModule
