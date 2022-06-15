import React, { FunctionComponent } from 'react'
import styles from './ComponentRenderer.module.scss'
import IComponentRenderer from './ComponentRenderer.interface'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'
import PlusCTA from '../PlusCTA/PlusCTA'
import ArrowCTA from '../ArrowCTA/ArrowCTA'
import Link from '../Link/Link'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'

const ComponentRenderer: FunctionComponent<IComponentRenderer> = () => {
  //test for inputfield
  const handleChange = (value: string, error: string) => {
    console.log(value)
    console.log(error)
  }

  return (
    <div className={`${styles.root} container`}>
      <div>
        <div style={{ background: 'orange' }}>
          <h1>Hyperlinks</h1>
          <Link color="blue" href="/our-story">
            Hello World Hyperlink
          </Link>
          <Link disabled color="blue" href="/our-story">
            Hello World Hyperlink
          </Link>
        </div>
        <div style={{ background: 'orange' }}>
          <h1>Arrow CTA</h1>
          <ArrowCTA
            orientation="down"
            color="black"
            href="https://revival-wp.weareenvoy.net/our-story"
          >
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
          <ArrowCTA orientation="right" color="blue" href="https://google.com">
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
          <ArrowCTA orientation="up" color="white" href="/our-story">
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
          <ArrowCTA disabled orientation="up" color="white" href="/our-story">
            Right arrow CTA
          </ArrowCTA>
          <br /> <br />
        </div>
        <div>
          <h1>Plus CTA</h1>
          <PlusCTA href="/our-story">Add to cart</PlusCTA>
          <br />
          <PlusCTA onClick={() => console.log('clicked')}>Add to cart</PlusCTA>
          <br />
          <PlusCTA disabled onClick={() => console.log('clicked')}>
            Add to cart
          </PlusCTA>
        </div>
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
      <div>
        <h1>Input</h1>
        <form action="">
          <Input
            placeholder="emailTest"
            type="email"
            onChange={handleChange}
            className=""
            required
          />
          <Input
            className=""
            placeholder="TextTest"
            type="text"
            onChange={handleChange}
            required
          />
          <Input
            className=""
            placeholder="TextTest2"
            type="text"
            onChange={handleChange}
            variant="outline"
          />
        </form>

        <div className="my-50 py-50">
          <h1>Dropdown</h1>
          <Dropdown
            placeholder="Dropdown placeholder"
            onChange={(e) => console.log('onChange: ', e)}
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default ComponentRenderer
