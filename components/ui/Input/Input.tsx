import cn from 'classnames'
import s from './Input.module.scss'
import React, { InputHTMLAttributes } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  placeholder?: string
  type?: string
  isDropdown?: boolean
  onChange?: (...args: any[]) => any
}

const Input: React.FC<Props> = (props) => {
  const { className, placeholder, type, children, onChange, ...rest } = props

  const rootClassName = cn(s.root, {}, className, 'typo-input')

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    console.log(e.target.value)
    return null
  }

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input
