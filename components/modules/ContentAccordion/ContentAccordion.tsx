import React, { FunctionComponent, useState } from 'react'
import c from 'classnames'
import parse from 'html-react-parser'
import { Minus } from '@components/icons'
import PlusLight from '@components/icons/PlusLight'
import styles from './ContentAccordion.module.scss'
import IContentAccordion from './ContentAccordion.interface'

const ContentAccordionModule: FunctionComponent<{
  module: IContentAccordion
}> = ({ module }) => {
  const { headline, accordion } = module
  const [accordionStatus, setAccordionStatus] = useState(
    accordion.map(() => false)
  )

  const toggleAccordion = (i: number) => {
    accordionStatus[i] = !accordionStatus[i]
    setAccordionStatus(accordionStatus.slice())
  }
  return (
    <div className={`${styles.root}`}>
      <h4 className={c(styles.headline)}>
        {headline && <span>{headline}</span>}
      </h4>
      <div className={c(styles.accordionsContainer)}>
        {accordion &&
          accordion.map((a, index) => (
            <div key={a.headline} className={c(styles.accordionContainer)}>
              <button
                className={c(styles.accordionHeadline, {
                  [styles.open]: accordionStatus[index],
                })}
                onClick={() => {
                  toggleAccordion(index)
                }}
              >
                <span className="">{a.headline}</span>
                <div>
                  <PlusLight className={c(styles.plusIcon)} color="black" />
                  <Minus
                    width={22}
                    color="black"
                    className={c(styles.minusIcon)}
                  />
                </div>
              </button>
              <div
                className={c('accordion', {
                  visible: accordionStatus[index],
                })}
              >
                <div className={c(styles.accordionCopy)}>{parse(a.copy)}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ContentAccordionModule
