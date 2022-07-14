import React, { FunctionComponent, useState, useRef } from 'react'
import Accordion from '@components/ui/Accordion/Accordion'
import parse from 'html-react-parser'
import styles from './TableAccordion.module.scss'
import ITableAccordion from './TableAccordion.interface'

const TableAccordionModule: FunctionComponent<{ module: ITableAccordion }> = ({
  module,
}) => {
  const { accordion } = module
  const [openAccordion, setOpenAccordion] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className={`${styles.root} container default-grid`}>
      <div className=" col-span-2 md:col-span-10 md:col-start-2" ref={ref}>
        {accordion.length &&
          accordion.map((item, index) => (
            <Accordion
              key={item.headline}
              headline={item.headline}
              open={openAccordion === index}
              onOpen={() => setOpenAccordion(index)}
            >
              {item.rows.map((row) => (
                <div
                  key={row.firstColumn}
                  className="default-grid typo-accordion-copy md:mb-10 mb-40"
                >
                  <div className="col-span-4 mb-10 md:mb-0">
                    {row.firstColumn}
                  </div>
                  <div className="col-span-6 md:-ml-50 mb-10 md:mb-0">
                    {row.secondColumn}
                  </div>
                  <div className="col-span-2 md:text-right xl:pr-20 ">
                    {row.thirdColumn}
                  </div>
                </div>
              ))}
              {item.copy && (
                <div className="typo-accordion-copy mt-30">
                  {parse(item.copy)}
                </div>
              )}
            </Accordion>
          ))}
      </div>
    </div>
  )
}

export default TableAccordionModule
