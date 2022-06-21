import cn from 'classnames'
import styles from './Input.module.scss'
import React, {
  FormEvent,
  FunctionComponent,
  MouseEvent,
  MouseEventHandler,
  useState,
} from 'react'
import { isEmailValid } from '../../../lib/utils'
import IInput, { InputError } from './Input.interface'
import InputArrow from '@components/icons/InputArrow'

const Input: FunctionComponent<IInput> = (props) => {
  const {
    className,
    placeholder,
    type,
    required,
    children,
    variant = 'default',
    onChange,
    onIconClick,
    ...rest
  } = props

  const [inputError, setInputError] = useState<InputError>(false)

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    const { type, required, value, id } = e.target as HTMLInputElement
    if (type === 'email' && value && !isEmailValid(value))
      setInputError('invalid')
    else if (required && !value) setInputError('required')
    else setInputError(false)
    if (typeof onChange === 'function') onChange(value, inputError)
  }

  const handleIconClick: MouseEventHandler = (e) => {
    if (typeof onIconClick === 'function') onIconClick(e)
  }

  const rootClassName = cn(
    styles.root,
    className,
    styles[variant],
    'typo-input inline-block',
    inputError === 'invalid' && 'text-red'
  )

  return (
    <label className={rootClassName + ' relative inline-block'}>
      <input
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
      {variant === 'blue-outline' && (
        <button
          className="absolute right-15 top-30 -translate-y-1/2 p-10"
          onClick={handleIconClick}
        >
          <InputArrow />
        </button>
      )}
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
