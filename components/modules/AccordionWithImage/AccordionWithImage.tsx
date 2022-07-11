import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import ImageComponent from '@components/ui/Image/Image'
import styles from './AccordionWithImage.module.scss'
import IAccordionWithImage from './AccordionWithImage.interface'

const parse = require('html-react-parser')

const AccordionWithImageModule: FunctionComponent<{
  module: IAccordionWithImage
}> = ({ module }) => {
  const { subline, headline, image, accordion } = module
  const [visibleIndex, setVisibleIndex] = useState(-1)

  return (
    <div className={`${styles.root} container mb-85`}>
      <div className="default-grid">
        <div className="col-span-2 md:col-span-7 mb-55 md:mb-0 md:flex md:items-start">
          <ImageComponent layout="fill" image={image} className="aspect-1" />
        </div>
        <div className="col-span-2 md:col-span-5">
          {subline && <span className="typo-eyebrow pb-10">{subline}</span>}
          {headline && <h3>{headline}</h3>}
          <div className="mt-55">
            {accordion &&
              accordion.map((item, index) => (
                <button
                  key={item.headline}
                  onClick={() => setVisibleIndex(index)}
                  className={cn(
                    styles.accordionRoot,
                    visibleIndex === index && 'selected'
                  )}
                >
                  <h5 className="text-blue font-bold">{item.headline}</h5>
                  {React.createElement(
                    'div',
                    {
                      className: `typo-small-paragraph accordion ${
                        visibleIndex === index ? 'visible' : ''
                      }`,
                    },
                    item.copy
                  )}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionWithImageModule
