import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './GradientOverlay.module.scss'
import IGradientOverlay from './GradientOverlay.interface'

const GradientOverlay: FunctionComponent<IGradientOverlay> = (props) => {
  return (
    <div className={c(styles.root, 'gradient-overlay')}>{props.children}</div>
  )
}

export default GradientOverlay
