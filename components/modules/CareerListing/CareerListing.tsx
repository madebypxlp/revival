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
      {headline && <h3>{headline}</h3>}
      {jobs &&
        jobs.map((job) => (
          <div key={job.title} className={styles.accordion}>
            <div>{job.title}</div>
            <div className={`accordion`}>
              {React.createElement(
                'div',
                { className: c(styles.text, '') },
                parse(job.postTypeJob.description)
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default CareerListingModule
