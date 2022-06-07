import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import styles from './AccordionWithImage.module.scss'
import IAccordionWithImage from './AccordionWithImage.interface'
import ImageComponent from '@components/ui/Image/Image'

const AccordionWithImageModule: FunctionComponent<{
  module: IAccordionWithImage
}> = ({ module }) => {
  const { subline, headline, image, accordion } = module
  const [visibleIndex, setVisibleIndex] = useState(-1)
  return (
    <div className={`${styles.root} container`}>
      <div className="default-grid">
        <div className="md:col-span-7">
          <ImageComponent width={1} height={1} image={image} />
        </div>
        <div className="md:col-span-5">
          {subline && <span>{subline}</span>}
          {headline && <h3>{headline}</h3>}
          <div>
            {accordion &&
              accordion.map((item, index) => (
                <div
                  key={item.headline}
                  onClick={() => setVisibleIndex(index)}
                  onMouseOver={() => setVisibleIndex(index)}
                  className={`${cn(
                    styles.accordionRoot,
                    visibleIndex === index ? styles.visible : ''
                  )}`}
                >
                  <h5 className="text-red font-bold">{item.headline}</h5>
                  <div dangerouslySetInnerHTML={{ __html: item.copy }} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionWithImageModule
