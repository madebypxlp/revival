import React, { FunctionComponent } from 'react'
import styles from './InlineVideo.module.scss'
import IInlineVideo from './InlineVideo.interface'

const InlineVideoModule: FunctionComponent<{ module: IInlineVideo }> = ({
  module,
}) => {
  console.log(module)
  return <div className={`${styles.root} container`}>Inlinevideo Module</div>
}

export default InlineVideoModule
