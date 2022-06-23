import React, { FunctionComponent } from 'react'
import styles from './FormBuilder.module.scss'
import IFormBuilder from './FormBuilder.interface'

const FormBuilderModule:FunctionComponent<{ module: IFormBuilder }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      Formbuilder Module
    </div>
  )
}

export default FormBuilderModule
