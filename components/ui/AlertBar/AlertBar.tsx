import React, { FunctionComponent } from 'react'
import styles from './AlertBar.module.scss'
import { AlertBar } from 'framework/wordpress/interfaces/header'

const AlertBar: FunctionComponent<AlertBar> = (props) => {
  console.log(props)
  return <div className={`${styles.root}`}>Alertbar</div>
}

export default AlertBar
