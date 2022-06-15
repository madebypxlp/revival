import React, { FunctionComponent } from 'react'
import parse from 'html-react-parser'
import c from 'classnames'
import styles from './CareerListing.module.scss'
import ICareerListing from './CareerListing.interface'

const CareerListingModule: FunctionComponent<{ module: ICareerListing }> = ({
  module,
}) => {
  const { headline, jobs, link, anchor } = module
  return (
    <div className={`${styles.root} container`}>
      {headline && (
        <h3 className="w-full text-center text-blue mb-70">{headline}</h3>
      )}

      {jobs &&
        jobs.map((job) => (
          <div key={job.title} className={c(styles.wrapper, 'default-grid')}>
            <div
              className={c(
                styles.accordion,
                'col-span-2 md:col-span-10 md:col-start-2'
              )}
            >
              <h4>{job.title}</h4>
              <div className={`accordion`}>
                {React.createElement(
                  'div',
                  { className: c(styles.text, '') },
                  parse(job.postTypeJob.description)
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CareerListingModule
