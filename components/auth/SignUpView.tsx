import { FC, useEffect, useState, useCallback } from 'react'
import { validate } from 'email-validator'
import { Info } from '@components/icons'
import { useUI } from '@components/ui/context'
import { Logo } from '@components/ui'
import useSignup from '@framework/auth/use-signup'
import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'
import styles from './AuthStyle.module.scss'
import Link from 'next/link'

interface Props {}

const SignUpView: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  //const signup = useSignup()
  const { setModalView, closeModal } = useUI()

  // const handleSignup = async (e: React.SyntheticEvent<EventTarget>) => {
  //   e.preventDefault()

  //   if (!dirty && !disabled) {
  //     setDirty(true)
  //     handleValidation()
  //   }

  //   try {
  //     setLoading(true)
  //     setMessage('')
  //     await signup({
  //       email,
  //       firstName,
  //       lastName,
  //       password,
  //     })
  //     setLoading(false)
  //     closeModal()
  //   } catch ({ errors }) {
  //     console.log(errors)
  //     //  setMessage(errors[0].message)
  //     setLoading(false)
  //   }
  // }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <div className={`${styles.root}`}>
      <form
        // onSubmit={handleSignup}
        className={`w-full flex flex-col justify-between p-3 `}
      >
        <div className="flex flex-col ">
          {message && (
            <div className="text-red border border-red p-3">{message}</div>
          )}
          <Input type="text" placeholder="First Name" onChange={setFirstName} />
          <Input type="text" placeholder="Last Name" onChange={setLastName} />
          <Input type="email" placeholder="Email" onChange={setEmail} />
          <Input
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
          <div className="!mb-30 ">
            <span className="typo-hyperlink-text align-middle inline-block">
              <Info
                className="mr-5 align-middle inline-block"
                width="15"
                height="15"
              />
              <strong>Info</strong>: Passwords must be longer than 7 chars and
              include numbers.
            </span>
          </div>

          <Button
            className="w-full mb-10 "
            color="yellow"
            variant="large"
            type="default"
            disabled={disabled}
          >
            Sign Up
          </Button>

          <span className="pt-0 text-center md:text-left">
            <span className="typo-hyperlink-text mr-5">
              Do you have an account?
            </span>
            <button
              className="typo-hyperlink-modal inline-block"
              onClick={() => setModalView('LOGIN_VIEW')}
            >
              Log In
            </button>
          </span>
        </div>
      </form>
    </div>
  )
}

export default SignUpView
