import React, { FunctionComponent } from 'react'
import styles from './ComponentRenderer.module.scss'
import IComponentRenderer from './ComponentRenderer.interface'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'

const ComponentRenderer: FunctionComponent<IComponentRenderer> = () => {
  return (
    <div className={`${styles.root} container`}>
      <div>
        <h1>Tags</h1>
        <Tag label="Hello World" variant="blue-filled" />
        <Tag label="Hello World" variant="blue-outline" />
        <Tag label="Hello World" variant="red-filled" />
      </div>
      <div>
        <h1>Buttons</h1>
        <Button />
      </div>
    </div>
  )
}

export default ComponentRenderer
