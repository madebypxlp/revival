import React, { FunctionComponent } from 'react'
import styles from './ResourceGrid.module.scss'
import IResourceGrid from './ResourceGrid.interface'

const ResourceGridModule:FunctionComponent<{ module: IResourceGrid }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Resourcegrid Module
    </div>
  )
}

export default ResourceGridModule
