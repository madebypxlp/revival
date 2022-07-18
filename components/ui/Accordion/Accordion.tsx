import React, { FunctionComponent, useState, useEffect } from 'react'
import cn from 'classnames'
import AccordionPlus from '@components/icons/AccordionPlus'
import styles from './Accordion.module.scss'
import IAccordion from './Accordion.interface'

const Accordion: FunctionComponent<IAccordion> = (props) => {
  const {
    open = false,
    onOpen,
    headline = 'default',
    variant,
    children = (
      <p className="text-30">
        &quot;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.&quot;
      </p>
    ),
  } = props

  return (
    <div
      className={cn(
        styles.root,
        open && styles.open,
        variant && styles[`variant--${variant}`]
      )}
    >
      <button
        className="flex justify-between items-center w-full mb-20"
        onClick={() => typeof onOpen === 'function' && onOpen()}
      >
        <span className="typo-accordionheadline text-blue">{headline}</span>
        <AccordionPlus
          className={`${styles.icon} ${open && styles.iconActive}`}
        />
      </button>
      <div className={cn(styles.accordion, `${open && styles.open}`)}>
        <div className={styles.accordionContentContainer}>{children}</div>
      </div>
    </div>
  )
}
export default Accordion
