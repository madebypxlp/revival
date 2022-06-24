import React, { FunctionComponent } from 'react'
import styles from './LearningCenterFilter.module.scss'
import ILearningCenterFilter from './LearningCenterFilter.interface'
import { useRouter } from 'next/router'

const LearningCenterFilterModule: FunctionComponent<{
  module: ILearningCenterFilter
}> = ({ module }) => {
  const r = useRouter()
  console.log(r.query)
  return (
    <div className={`${styles.root} container`}>
      Learningcenterfilter Module
    </div>
  )
}

export default LearningCenterFilterModule
