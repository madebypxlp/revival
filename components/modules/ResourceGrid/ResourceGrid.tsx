import React, { FunctionComponent } from 'react'
import styles from './ResourceGrid.module.scss'
import IResourceGrid from './ResourceGrid.interface'

const ResourceGridModule: FunctionComponent<{ module: IResourceGrid }> = ({
  module,
}) => {
  console.log(module)

  const { headline, link, featuredResource } = module
  return (
    <div className={`${styles.root} container default-grid`}>
      <div className={styles.headlineContainer}>
        {headline && <h4>{headline}</h4>}
      </div>
    </div>
  )
}

export default ResourceGridModule
