import React, { FormEvent, FunctionComponent, useState } from 'react'
import styles from './NewsletterForm.module.scss'
import INewsletterForm from './NewsletterForm.interface'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Translations from 'constants/translations'

const NewsletterForm: FunctionComponent<INewsletterForm> = (props) => {
  const { submitLabel, inputClassName } = props
  const [email, setEmail] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    // send email somewhere
    console.log('Newsletter submit:', email, e)
    target.reset()
    setSuccess(true)
  }
  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <Input
        type="email"
        placeholder="Email address"
        required
        className={`${styles.input} ${inputClassName} inline-block mb-2 md:mb-20 w-full md:w-auto`}
        variant="blue-outline"
        onChange={(v) => {
          setEmail(v)
          setSuccess(false)
        }}
        status={
          success && (
            <p className="absolute typo-small-paragraph text-green">
              {Translations.FORM.SUCCESS}
            </p>
          )
        }
      />
      <input type="submit" hidden />
      {submitLabel && (
        <>
          <br />
          <Button
            type="default"
            buttonType="submit"
            variant="large"
            color="yellow"
            className="md:mt-30 mt-20"
          >
            {submitLabel}
          </Button>
        </>
      )}
    </form>
  )
}

export default NewsletterForm
