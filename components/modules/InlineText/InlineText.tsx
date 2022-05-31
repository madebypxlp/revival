import React, { FunctionComponent } from 'react'
import styles from './InlineText.module.scss'
import IInlineText from './InlineText.interface'

const InlineTextModule:FunctionComponent<{ module: IInlineText }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Inlinetext Module
    </div>
  )
}

export default InlineTextModule
