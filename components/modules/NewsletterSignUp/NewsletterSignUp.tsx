import React, { FunctionComponent, useState } from 'react'
import NewsletterForm from '@components/ui/NewsletterForm/NewsletterForm'
import styles from './NewsletterSignUp.module.scss'
import INewsletterSignUp from './NewsletterSignUp.interface'

const NewsletterSignUpModule: FunctionComponent<{
  module: INewsletterSignUp
}> = ({ module }) => {
  const { buttonLabel, headline, subline, anchor = '' } = module
  return (
    <div
      id={anchor}
      className={`${styles.root} container bg-cream md:bg-white  mb-60 md:mb-80`}
    >
      <div className="bg-cream md:rounded-15 py-65 md:py-125 text-center">
        <h2 className="typo-h3 text-blue mb-20">{headline}</h2>
        <p className="typo-small-paragraph text-blue mb-50">{subline}</p>
        <NewsletterForm submitLabel={buttonLabel} />
      </div>
    </div>
  )
}

export default NewsletterSignUpModule
