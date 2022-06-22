import React, { FunctionComponent } from 'react'
import styles from './TableAccordion.module.scss'
import ITableAccordion from './TableAccordion.interface'

const TableAccordionModule: FunctionComponent<{ module: ITableAccordion }> = ({
  module,
}) => {
  console.log(module)
  return <div className={`${styles.root} container`}>Tableaccordion Module</div>
}

export default TableAccordionModule
