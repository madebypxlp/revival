import React, { FunctionComponent, useState } from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './PDPAccordions.module.scss'
import IPDPAccordions from './PDPAccordions.interface'
import Accordion from '../Accordion/Accordion'

const PDPAccordions: FunctionComponent<IPDPAccordions> = (props) => {
  const { accordions } = props
  const accordionsStatus = accordions.map((a) => false)
  const [accordionsOpen, setAccordionsOpen] = useState(accordionsStatus)

  const toggleAccordion = (index: number) => {
    accordionsOpen[index] = !accordionsOpen[index]
    setAccordionsOpen(accordionsOpen.slice())
  }
  return (
    <div className={cn(styles.root, 'container default-grid')}>
      <div className={styles.accordionContainers}>
        {accordions.map((a, index) => {
          const accordionContent = (
            <div className={styles.accordionContainer}>
              <div className={styles.accordionContent}>{parse(a.content)}</div>
            </div>
          )
          return (
            <Accordion
              key={a.title}
              open={accordionsOpen[index]}
              onOpen={() => toggleAccordion(index)}
              headline={a.title}
              children={accordionContent}
              variant="pdp"
            />
          )
        })}
      </div>
    </div>
  )
}

export default PDPAccordions
