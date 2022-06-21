import React, { FunctionComponent } from 'react'
import styles from './InlineImage.module.scss'
import IInlineImage from './InlineImage.interface'

const InlineImageModule: FunctionComponent<{ module: IInlineImage }> = ({
  module,
}) => {
  console.log(module)
  return <div className={`${styles.root} container`}>Inlineimage Module</div>
}

export default InlineImageModule
