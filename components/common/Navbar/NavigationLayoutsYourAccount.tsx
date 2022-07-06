import cn from 'classnames'
import { AcfOptionsHeader } from 'framework/wordpress/interfaces/header'
import Link from 'next/link'
import Button from '@components/ui/Button/Button'
import parse from 'html-react-parser'
import React, {
  useCallback,
  useEffect,
  useState,
  FunctionComponent,
} from 'react'
import { validate } from 'email-validator'
import { useUI } from '@components/ui/context'
import useLogin from '@framework/auth/use-login'
import Input from 'components/ui/Input/Input'
import styles from './Navbar.module.scss'

const Navbar: FunctionComponent<{ data: AcfOptionsHeader['yourAccount'] }> = ({
  data,
}) => {
  const { headline, copy } = data
  console.log('here', data)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { setModalView, displayModal, closeModal, modalView, openModal } =
    useUI()

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
      setMessage(errors[0].message)
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

  /*   useEffect(() => {
    if (open) {
      openModal()
    }
  }, [open])
 */
  return (
    <div className={cn(styles.NavigationLayoutsYourAccount, 'container')}>
      <div className="default-grid pt-75 pb-110 z-20 bg-white relative">
        <div className="col-start-2 col-span-4">
          <h4 className={cn(styles.accountHeadline, 'mb-20')}>{headline}</h4>
          <div className={cn(styles.accountCopy, 'mb-55')}>{parse(copy)}</div>
          <Button
            color="yellow"
            variant="large"
            type="default"
            className=" mb-10 md:mb-0 mr-10"
            onClick={() => setModalView('SIGNUP_VIEW')}
          >
            Create An Account
          </Button>
        </div>
        <div className="col-start-8 col-span-4">
          <h4 className={cn(styles.accountHeadline, 'mb-35')}>Your Account</h4>
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

              <div className={cn(styles.links, '')}>
                {/*       <button
                  className="typo-hyperlink-modal mb-10 md:mb-0 mr-10"
                  onClick={() => setModalView('SIGNUP_VIEW')}
                >
                  Create An Account
                </button> */}
                <Button
                  className=" mb-10 md:mb-30 col-span-2 mr-25 w-220"
                  color="yellow"
                  variant="large"
                  type="default"
                  buttonType="submit"
                >
                  Login
                </Button>
                <button
                  className="typo-hyperlink-modal"
                  onClick={(e) => {
                    e.preventDefault()
                    setModalView('FORGOT_VIEW')
                    openModal()
                  }}
                >
                  Forgot Your Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
