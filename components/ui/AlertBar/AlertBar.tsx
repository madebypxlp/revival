import React, { FunctionComponent } from 'react'
import { useIsMobile } from '@commerce/utils/hooks'
import { AlertBar as IAlertBar } from 'framework/wordpress/interfaces/header'
import c from 'classnames'
import parse from 'html-react-parser'
import styles from './AlertBar.module.scss'

const AlertBar: FunctionComponent<IAlertBar> = (props) => {
  const { leftCopy, rightCopy, active } = props
  const isMobile = useIsMobile()
  if (!active) return null
  return (
    <div className={styles.root}>
      <div className="container flex justify-center md:justify-between">
        <span className={c({ 'text-center w-full pt-30': isMobile })}>
          {parse(leftCopy)}
        </span>
        {!isMobile && <span>{rightCopy}</span>}
      </div>
    </div>
  )
}

export default AlertBar
