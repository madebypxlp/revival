import cn from 'classnames'
import styles from './Input.module.scss'
import React, { FunctionComponent, useState } from 'react'
import { isEmailValid } from '../../../lib/utils'
import IInput from './Input.interface'

const Input: FunctionComponent<IInput> = (props) => {
  const {
    className,
    placeholder,
    type,
    required,
    children,
    variant,
    onChange,
    ...rest
  } = props

  const [inputError, setInputError] = useState<false | 'invalid' | 'required'>(
    false
  )

  const handleOnChange = (e: any) => {
    const { type, required, value, id } = e.target
    if (type === 'email' && value && !isEmailValid(value))
      setInputError('invalid')
    else if (required && !value) setInputError('required')
    else setInputError(false)
    if (onChange) onChange(value, inputError)

    return null
  }

  const rootClassName = cn(
    styles.root,
    className,
    'typo-input mb-10',
    inputError === 'invalid' && 'text-red'
  )

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        placeholder={required ? placeholder + '*' : placeholder}
        type={type}
        required={required}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
      {inputError === 'invalid' && (
        <span className={'block typo-input-error mt-5'}>
          *Invalid Email Address
        </span>
      )}
      {inputError === 'required' && (
        <span className={'block typo-input-error mt-5'}>*Required</span>
      )}
    </label>
  )
}

export default Input
