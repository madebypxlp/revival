import React, { FunctionComponent, useState } from 'react'
import styles from './TableAccordion.module.scss'
import ITableAccordion from './TableAccordion.interface'
import Accordion from '@components/ui/Accordion/Accordion'
import parse from 'html-react-parser'

const TableAccordionModule: FunctionComponent<{ module: ITableAccordion }> = ({
  module,
}) => {
  const { accordion } = module
  const [openAccordion, setOpenAccordion] = useState(0)

  return (
    <div className={`${styles.root} container default-grid`}>
      <div className=" col-span-2 md:col-span-10 md:col-start-2">
        {accordion.length &&
          accordion.map((item, index) => {
            return (
              <Accordion
                headline={item.headline}
                open={openAccordion === index}
                onOpen={() => setOpenAccordion(index)}
              >
                {item.rows.map((row) => {
                  return (
                    <div className="default-grid typo-accordion-copy mb-10">
                      <div className="col-span-4">{row.firstColumn}</div>
                      <div className="col-span-6">{row.secondColumn}</div>
                      <div className="col-span-2 md:text-right">
                        {row.thirdColumn}
                      </div>
                    </div>
                  )
                })}
                {item.copy && (
                  <div className="typo-accordion-copy mt-30">
                    {parse(item.copy)}
                  </div>
                )}
              </Accordion>
            )
          })}
      </div>
    </div>
  )
}

export default TableAccordionModule
