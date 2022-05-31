---
to: components/modules/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.tsx
---
import React, { FunctionComponent } from 'react'
import styles from './<%= h.inflection.camelize(name) %>.module.scss'
import I<%= h.inflection.camelize(name) %> from './<%= h.inflection.camelize(name) %>.interface'

const <%= h.inflection.camelize(name) %>Module:FunctionComponent<{ module: I<%= h.inflection.camelize(name) %> }> = ({ module }) => {
  console.log(module)
  return (
    <div
      className={`${styles.root} container`}
    >
      <%= h.inflection.humanize(name) %> Module
      {console.log(module)}
    </div>
  )
}

export default <%= h.inflection.camelize(name) %>Module
