import React, { FunctionComponent, useState } from 'react'
import styles from './NewsletterSignUp.module.scss'
import INewsletterSignUp from './NewsletterSignUp.interface'
import Input from './../../ui/Input/Input'
import Button from '@components/ui/Button/Button'

const NewsletterSignUpModule: FunctionComponent<{
  module: INewsletterSignUp
}> = ({ module }) => {
  const { buttonLabel, headline, subline } = module
  console.log(module)

  const [email, setEmail] = useState()
  const [error, setError] = useState()

  return (
    <div className={`${styles.root} container mt-80`}>
      <div className="bg-cream rounded-15 py-125 text-center">
        <h2 className="typo-h3 text-blue mb-20">{headline}</h2>
        <p className="typo-small-paragraph text-blue mb-50">{subline}</p>
        <form action="">
          <Input
            placeholder="Email adress"
            type="email"
            variant="blue-outline"
            className="mb-50"
          />
          <div>
            <Button type="default" variant="large" color="yellow">
              {buttonLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewsletterSignUpModule
