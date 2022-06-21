import React, { FunctionComponent } from 'react'
import styles from './NewsletterSignUp.module.scss'
import INewsletterSignUp from './NewsletterSignUp.interface'

const NewsletterSignUpModule: FunctionComponent<{
  module: INewsletterSignUp
}> = ({ module }) => {
  console.log(module)
  return (
    <div className={`${styles.root} container`}>Newslettersignup Module</div>
  )
}

export default NewsletterSignUpModule
