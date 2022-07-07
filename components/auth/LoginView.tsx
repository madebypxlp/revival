import { FC, useEffect, useState, useCallback } from 'react'
import { Logo } from '@components/ui'
import styles from './AuthStyle.module.scss'
import useLogin from '@framework/auth/use-login'
import { useUI } from '@components/ui/context'
import { validate } from 'email-validator'
import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'

interface Props {}

const LoginView: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { setModalView, closeModal } = useUI()

  const login = useLogin()

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await login({
        email,
        password,
      })
      setLoading(false)
      closeModal()
    } catch ({ errors }) {
      console.log(errors)
      //  setMessage(errors[0].message)
      setLoading(false)
    }
  }

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
    <div className={styles.root}>
      <form onSubmit={handleLogin} className={styles.form}>
        <Input
          placeholder="Email"
          type="email"
          onChange={setEmail}
          className="mb-5"
          required
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={setPassword}
          className="mb-10"
          required
        />
        <Button
          className="w-full mb-10"
          color="yellow"
          variant="large"
          type="default"
          buttonType="submit"
        >
          Sign In
        </Button>

        <div className={styles.links}>
          <button
            className="typo-hyperlink-modal mb-10 md:mb-0"
            onClick={() => setModalView('SIGNUP_VIEW')}
          >
            Create An Account
          </button>
          <button
            className="typo-hyperlink-modal"
            onClick={() => setModalView('FORGOT_VIEW')}
          >
            Forgot Your Password?
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginView
