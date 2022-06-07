import React, { FunctionComponent } from 'react'
import styles from './AccordionWithImage.module.scss'
import IAccordionWithImage from './AccordionWithImage.interface'
import ImageComponent from '@components/ui/Image/Image'
import Accordion from '@components/ui/Accordion/Accordion'

const AccordionWithImageModule: FunctionComponent<{
  module: IAccordionWithImage
}> = ({ module }) => {
  console.log(module)
  const { subline, headline, image, accordion } = module
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
              accordion.map((item) => (
                <Accordion title={item.headline}>
                  <div dangerouslySetInnerHTML={{ __html: item.copy }} />
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionWithImageModule
