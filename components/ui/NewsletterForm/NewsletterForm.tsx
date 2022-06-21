import React, { FormEvent, FunctionComponent, useState } from 'react'
import styles from './NewsletterForm.module.scss'
import INewsletterForm from './NewsletterForm.interface'
import Input from '../Input/Input'

const NewsletterForm: FunctionComponent<INewsletterForm> = (props) => {
  console.log(props)
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
    <form onSubmit={onSubmit}>
      <Input
        type="email"
        placeholder="Email address"
        required
        className="inline-block mb-2 md:mb-20 w-340 max-w-full"
        variant="blue-outline"
        onChange={(v) => {
          setEmail(v)
          setSuccess(false)
        }}
      />
      {success && <p className="typo-small-parapgraph text-green">Success!</p>}
      <input type="submit" hidden />
    </form>
  )
}

export default NewsletterForm
