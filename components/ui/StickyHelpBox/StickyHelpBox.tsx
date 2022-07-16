import React, { FunctionComponent, useRef } from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import { Phone, SliderArrowLeft } from '@components/icons'
import styles from './StickyHelpBox.module.scss'
import IStickyHelpBox from './StickyHelpBox.interface'

const StickyHelpBox: FunctionComponent<IStickyHelpBox> = ({ globals }) => {
  if (!globals?.globals?.stickyHelpBox) return null
  return (
    <div className={styles.spacer}>
      <div className={styles.root}>
        <div className="relative w-full">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          >
            <SliderArrowLeft
              className={cn(
                styles.button,
                'rotate-90 w-70 absolute right-0 -top-90 rounded-full'
              )}
            />
          </button>
        </div>
        <div className={cn(styles.boxContainer)}>
          <Phone className="mb-10" />
          <div className="max-w-full">
            {parse(globals?.globals?.stickyHelpBox)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyHelpBox
