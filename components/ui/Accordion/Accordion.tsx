import React, { FunctionComponent, useState, useEffect } from 'react'
import styles from './Accordion.module.scss'
import IAccordion from './Accordion.interface'
import AccordionMinus from '@components/icons/AccordionMinus'
import AccordionPlus from '@components/icons/AccordionPlus'

const Accordion: FunctionComponent<IAccordion> = (props) => {
  const {
    open = false,
    onOpen,
    headline = 'default',
    children = (
      <p className="text-30">
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet."
      </p>
    ),
  } = props

  return (
    <div className={`${styles.root} ${open && 'pt-40'}`}>
      <button
        type="button"
        className="flex justify-between items-center w-full mb-20"
        onClick={() => typeof onOpen === 'function' && onOpen()}
      >
        <span className="typo-accordionheadline text-blue md:mb-10">
          {headline}
        </span>
        <AccordionPlus
          className={styles.icon + ' ' + (open && styles.iconActive)}
        />
      </button>
      <div
        className={`max-h-[0px] transition-all duration-500 overflow-hidden  ${
          open && 'max-h-[1000px]'
        }`}
      >
        <div className="w-11/12 mb-40">{children}</div>
      </div>
    </div>
  )
}
export default Accordion
