import React, { FunctionComponent } from 'react'
import styles from './ContentAccordion.module.scss'
import IContentAccordion from './ContentAccordion.interface'

const ContentAccordionModule:FunctionComponent<{ module: IContentAccordion }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Contentaccordion Module
    </div>
  )
}

export default ContentAccordionModule
