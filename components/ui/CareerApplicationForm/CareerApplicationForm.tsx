import React, { FunctionComponent } from 'react'
import styles from './CareerApplicationForm.module.scss'
import ICareerApplicationForm from './CareerApplicationForm.interface'

const CareerApplicationForm: FunctionComponent<ICareerApplicationForm> = () => (
  <div className={`${styles.root} container py-40 md:py-100`}>
    <h2 className="text-blue mb-40 md:mb-70">Revival Career Application</h2>
    <iframe
      title="Revival Career Application"
      width={1}
      height={1}
      src="https://secure.jotform.com/revivalanimal/job-application"
    />
  </div>
)

export default CareerApplicationForm
