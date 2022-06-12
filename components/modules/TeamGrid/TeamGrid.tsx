import React, { FunctionComponent } from 'react'
import styles from './TeamGrid.module.scss'
import ITeamGrid from './TeamGrid.interface'

const TeamGridModule:FunctionComponent<{ module: ITeamGrid }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Teamgrid Module
    </div>
  )
}

export default TeamGridModule
