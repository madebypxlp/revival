import { FC, useEffect, useState, useCallback } from 'react'
import { validate } from 'email-validator'
import { useUI } from '@components/ui/context'
import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'
import styles from './AuthStyle.module.scss'

type ForgotPasswordSuccessProps = {
  email: string
}

const ForgotPasswordSuccess: FC<ForgotPasswordSuccessProps> = (props) => {
  const { setModalView, closeModal } = useUI()

  return (
    <div className={`${styles.root} `}>
      <div className="flex justify-center items-center flex-col py-40 md:py-80">
        <h4 className="text-blue mb-10">We’ve sent you something!</h4>
        <p className="typo-modal-text md:w-680 text-center mb-30">
          We'll check for an account with the email address {`${props.email} `}
          and send an email to reset your password. If you don't receive an
          email within a couple of minutes, please check your spam folder.
        </p>
        <Button
          className="w-full md:w-450"
          color="yellow"
          variant="small"
          type="default"
          onClick={() => setModalView('LOGIN_VIEW')}
        >
          Back To Sign In
        </Button>
      </div>
    </div>
  )
}

interface Props {}

const ForgotPassword: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const { setModalView, closeModal } = useUI()

  const handleResetPassword = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }
  }

  const handleValidation = useCallback(() => {
    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email))
    }
  }, [email, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  const returnValue = disabled ? (
    <ForgotPasswordSuccess email={email} />
  ) : (
    <div className={`${styles.root}`}>
      <form
        onSubmit={handleResetPassword}
        className="w-full flex flex-col justify-between p-3"
      >
        <div className="flex flex-col ">
          {message && (
            <div className="text-red border border-red p-3">{message}</div>
          )}

          <Input
            className="mb-10"
            placeholder="Email"
            onChange={setEmail}
            type="email"
          />

          <Button
            className="mb-10"
            color="yellow"
            variant="small"
            type="default"
            disabled={disabled}
            onClick={() => setDisabled(true)}
          >
            Recover Password
          </Button>

          <span className="pt-3 text-center md:text-left ">
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

  return returnValue
}

export default ForgotPassword
