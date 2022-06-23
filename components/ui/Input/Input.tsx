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
import InputSearch from '@components/icons/InputSearch'
import Translations from 'constants/translations'

const Input: FunctionComponent<IInput> = (props) => {
  const {
    className,
    placeholder,
    type,
    required,
    children,
    variant = 'default',
    icon = 'arrow',
    size = 'default',
    weight = 'default',
    onChange,
    onIconClick,
    status,
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
    styles['variant-' + variant],
    styles['size-' + size],
    styles['weight-' + weight],
    'typo-input inline-block',
    inputError === 'invalid' && 'text-red'
  )

  return (
    <label className={rootClassName + ' relative inline-block group'}>
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
        <button className={styles.icon} onClick={handleIconClick}>
          {icon === 'arrow' && <InputArrow className="w-20 h-20" />}
          {icon === 'search' && <InputSearch className="w-20 h-20" />}
        </button>
      )}
      {status}
      <span className={styles.error}>
        {inputError === 'invalid' && Translations.FORM.INVALID_EMAIL}
        {inputError === 'required' && Translations.FORM.REQUIRED}
        {!inputError && <>&nbsp;</>}
      </span>
    </label>
  )
}

export default Input
