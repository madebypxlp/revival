import React, { FunctionComponent } from 'react'
import styles from './WYSIWYG.module.scss'
import IWYSIWYG from './WYSIWYG.interface'

const WYSIWYGModule: FunctionComponent<IWYSIWYG> = (props) => {
  const { text } = props
  return (
    <div className={`${styles.root} container`}>
      <div className="default-grid">
        <div className="col-span-full md:col-span-8 md:col-start-3">
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  )
}

export default WYSIWYGModule
