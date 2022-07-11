import React, { FunctionComponent, useEffect, useState } from 'react'
import parse from 'html-react-parser'
import c from 'classnames'
import { ChevronUp } from '@components/icons'
import Button from '@components/ui/Button/Button'
import Fade from '@components/ui/Fade/Fade'
import ICareerListing from './CareerListing.interface'
import styles from './CareerListing.module.scss'

const CareerListingModule: FunctionComponent<{ module: ICareerListing }> = ({
  module,
}) => {
  const { headline, jobs, link, anchor } = module
  const [activeIndex, setIndex] = useState<number>(-1)

  useEffect(() => {
    if (activeIndex > -1) {
      const d = document.getElementById(`acc-${activeIndex}`)
      if (d) {
        setTimeout(() => {
          d.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 500)
      }
    }
  }, [activeIndex])
  return (
    <div id={anchor} className={`${styles.root} container`}>
      {headline && (
        <h3 className="w-full text-center text-blue mb-40">{headline}</h3>
      )}

      {jobs &&
        jobs.map((job, index) => (
          <Fade delay={index * 200} key={job.title}>
            <div className={c(styles.wrapper, 'default-grid mt-30')}>
              <button
                onClick={() => setIndex(activeIndex === index ? -1 : index)}
                className={c(styles.parent, 'default-grid col-span-full')}
              >
                <div
                  id={`acc-${index}`}
                  className={c(
                    styles.accordion,
                    { [styles.active]: activeIndex === index },
                    'col-span-2 md:col-span-11 md:col-start-2 flex items-center'
                  )}
                >
                  <h4 className="typo-h6 md:typo-h4">{job.title}</h4>
                  <ChevronUp />
                </div>
              </button>
              <div
                className={c(
                  'accordion col-span-2 md:col-span-10 md:col-start-2 text-left',
                  { visible: index === activeIndex }
                )}
              >
                {React.createElement(
                  'div',
                  {
                    className: c(
                      styles.text,
                      'pt-50 wysiwyg typo-large-paragraph'
                    ),
                  },
                  parse(job.postTypeJob.description)
                )}
                <Button
                  className="mt-50 mb-70"
                  color="yellow"
                  variant="small"
                  type="default"
                  link={link}
                />
              </div>
            </div>
          </Fade>
        ))}
    </div>
  )
}

export default CareerListingModule
