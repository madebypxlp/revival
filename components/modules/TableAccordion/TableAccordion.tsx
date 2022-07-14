import React, { FunctionComponent, useState } from 'react'
import Accordion from '@components/ui/Accordion/Accordion'
import parse from 'html-react-parser'
import styles from './TableAccordion.module.scss'
import ITableAccordion from './TableAccordion.interface'

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
                    <div className="default-grid typo-accordion-copy md:mb-10 mb-40">
                      <div className="col-span-4 mb-10 md:mb-0">
                        {row.firstColumn}
                      </div>
                      <div className="col-span-6 mb-10 md:mb-0">
                        {row.secondColumn}
                      </div>
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
