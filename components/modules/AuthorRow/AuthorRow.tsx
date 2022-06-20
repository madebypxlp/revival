import React, { FunctionComponent } from 'react'
import styles from './AuthorRow.module.scss'
import IAuthorRow from './AuthorRow.interface'

const AuthorRowModule: FunctionComponent<any> = (props) => {
  console.log(props)
  return <div className={`${styles.root} container`}>Authorrow Module</div>
}

export default AuthorRowModule
