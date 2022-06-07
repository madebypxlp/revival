import React, { FunctionComponent } from 'react'
import styles from './AccordionWithImage.module.scss'
import IAccordionWithImage from './AccordionWithImage.interface'

const AccordionWithImageModule:FunctionComponent<{ module: IAccordionWithImage }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Accordionwithimage Module
    </div>
  )
}

export default AccordionWithImageModule
