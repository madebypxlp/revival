import React, { FunctionComponent } from 'react'
import styles from './TableAccordion.module.scss'
import ITableAccordion from './TableAccordion.interface'
import Accordion from '@components/ui/Accordion/Accordion'

const TableAccordionModule: FunctionComponent<{
  module: ITableAccordion
}> = ({ module }) => {
  console.log(module)
  return <div className={`${styles.root} container`}>test</div>
}

export default TableAccordionModule
