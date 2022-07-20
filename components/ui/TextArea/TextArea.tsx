import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import styles from './TextArea.module.scss'
import ITextArea from './TextArea.interface'

const TextArea: FunctionComponent<ITextArea> = (props) => {
  const { className, placeholder, rows = 5, onChange } = props

  const handleOnChange = (e: any) => {
    const { value } = e.target as HTMLInputElement
    onChange(value)
  }

  return (
    <div className={cn(styles.root, className)}>
      <textarea
        onChange={handleOnChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  )
}

export default TextArea
