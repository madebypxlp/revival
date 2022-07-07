import cn from 'classnames'
import styles from './Input.module.scss'
import React, {
  FormEvent,
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'
import {
  isCvvValid,
  isEmailValid,
  isExpDateValid,
  isCardValid,
} from '../../../lib/utils'
import IInput, { InputError } from './Input.interface'
import InputArrow from '@components/icons/InputArrow'
import InputSearch from '@components/icons/InputSearch'
import Translations from 'constants/translations'
import Button from '../Button/Button'
import Plus from '@components/icons/Plus'
import Minus from '@components/icons/MinusBold'
import parse from 'html-react-parser'

const Input: FunctionComponent<IInput> = (props) => {
  const {
    className,
    placeholder,
    type,
    required,
    children,
    label,
    validationType,
    variant = 'default',
    icon,
    size = 'default',
    weight = 'default',
    square = false,
    incrementerButtons = false,
    onChange,
    onIconClick,
    status,
    ...rest
  } = props

  const [inputError, setInputError] = useState<InputError>(false)
  const [inputFiles, setInputFiles] = useState<FileList>()
  const [inputNumber, setInputNumber] = useState<number>(0)

  useEffect(() => {
    if (typeof onChange === 'function') onChange(String(inputNumber), false)
  }, [inputNumber])

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    const { required, value, checked, files } = e.target as HTMLInputElement

    if (incrementerButtons) setInputNumber(+value)

    // validation
    if (type === 'checkbox' && required && !checked) setInputError('required')
    else if (required && !value) {
      setInputError('required')
    } else if (type === 'email' && value && !isEmailValid(value)) {
      setInputError('invalid_email')
    } else if (validationType) {
      switch (validationType) {
        case 'card_exp_date':
          setInputError(
            value && !isExpDateValid(value) ? 'invalid_exp_date' : false
          )
          break
        case 'card_cvv':
          setInputError(value && !isCvvValid(value) ? 'invalid_cvv' : false)
          break

        case 'card_number':
          setInputError(
            value && !isCardValid(value) ? 'invalid_card_number' : false
          )
          break
      }
    } else setInputError(false)
    // end validation

    if (typeof onChange === 'function') {
      if (type === 'checkbox' || type === 'radio') onChange(checked, inputError)
      if (type === 'file') {
        setInputFiles(files || undefined)
        onChange(files || false, inputError)
      } else onChange(value, inputError)
    }
  }

  const handleIconClick: MouseEventHandler = (e) => {
    if (typeof onIconClick === 'function') onIconClick(e)
  }

  const buttonIncrement = () => {
    setInputNumber((prev) => {
      return prev + 1
    })
  }

  const buttonDecrement = () => {
    setInputNumber((prev) => {
      return prev - 1
    })
  }

  const rootClassName = cn(
    styles.root,
    className,
    styles['variant-' + variant],
    styles['size-' + size],
    styles['weight-' + weight],
    square && styles.square,
    incrementerButtons && styles.incrementer,
    'typo-input inline-block',
    inputError && 'text-red'
  )

  const getErrorMessage = () => {
    const errorMessages = {
      invalid_email: Translations.FORM.INVALID_EMAIL,
      invalid_cvv: Translations.FORM.INVALID_CVV,
      invalid_exp_date: Translations.FORM.INVALID_EXP_DATE,
      invalid_card_number: Translations.FORM.INVALID_CARD_NUMBER,
      required: Translations.FORM.REQUIRED,
      false: '&nbsp;',
    }
    return errorMessages[String(inputError) as keyof typeof errorMessages]
  }

  return (
    <label
      className={cn(
        rootClassName,
        'relative inline-block group',
        styles['type-' + type]
      )}
    >
      {label && (
        <span className={styles.label}>{label + (required ? '*' : '')}</span>
      )}

      {incrementerButtons && (
        <button
          onClick={buttonDecrement}
          className={cn(styles.button, 'absolute left-20 w-15')}
        >
          <Minus />
        </button>
      )}
      {incrementerButtons && (
        <button
          onClick={buttonIncrement}
          className={cn(styles.button, 'absolute right-20 w-15')}
        >
          <Plus className="fill-black" />
        </button>
      )}

      <input
        onChange={handleOnChange}
        placeholder={'' + placeholder + (required ? '*' : '')}
        type={type}
        required={required}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...(incrementerButtons ? { value: inputNumber } : {})}
        {...rest}
      />

      {type === 'file' && (
        <div className={styles.file}>
          <Button isFake variant="large" color="yellow">
            {Translations.FORM.CHOOSE_A_FILE}
          </Button>
          <span className="ml-20 font-normal">
            {!inputFiles?.length
              ? Translations.FORM.NO_FILE_CHOSEN
              : Array.from(inputFiles)
                  .map((file) => file.name)
                  .join(', ')}
          </span>
        </div>
      )}

      {!!icon && (
        <button className={styles.icon} onClick={handleIconClick}>
          {icon === 'arrow' && <InputArrow className="w-20 h-20" />}
          {icon === 'search' && <InputSearch className="w-20 h-20" />}
        </button>
      )}

      {status}

      <span className={styles.error}>{parse(getErrorMessage())}</span>
    </label>
  )
}

export default Input
