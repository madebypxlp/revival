import React, { FunctionComponent } from 'react'
import styles from './Accordion.module.scss'
import IAccordion from './Accordion.interface'

const Accordion:FunctionComponent<IAccordion> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      Accordion
    </div>
  )
}

export default Accordion
