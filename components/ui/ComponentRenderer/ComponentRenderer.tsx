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
      <div style={{ background: 'orange' }}>
        <h1>Buttons</h1>
        <Button color="yellow" variant="large" type="default">
          Hello World
        </Button>
        <Button color="red" variant="small" type="default">
          Hello World
        </Button>
        <Button color="blue" variant="small" type="default">
          Hello World
        </Button>
        <Button color="black" variant="small" type="default">
          Hello World
        </Button>
        <Button color="white" variant="small" type="default">
          Hello World
        </Button>
        <br /> <br />
        <Button outline color="yellow" variant="large" type="default">
          Hello World
        </Button>
        <Button outline color="red" variant="small" type="default">
          Hello World
        </Button>
        <Button outline color="blue" variant="small" type="default">
          Hello World
        </Button>
        <Button outline color="black" variant="small" type="default">
          Hello World
        </Button>
        <Button outline color="white" variant="small" type="default">
          Hello World
        </Button>
        <br /> <br />
        <Button disabled color="white" variant="small" type="default">
          Hello World
        </Button>
        <Button disabled outline color="white" variant="small" type="default">
          Hello World
        </Button>
        <Button disabled outline color="blue" variant="small" type="default">
          Hello World
        </Button>
        <Button disabled color="red" variant="small" type="default">
          Hello World
        </Button>
        <Button
          type="default"
          variant="large"
          color="yellow"
          href="https://revival-wp.weareenvoy.net/our-story"
        >
          internal link test
        </Button>
      </div>
    </div>
  )
}

export default ComponentRenderer
