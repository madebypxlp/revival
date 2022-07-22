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
    className,
    children,
  } = props

  return (
    <div
      className={cn(
        styles.root,
        open && styles.open,
        variant && styles[`variant--${variant}`],
        className
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
