---
to: components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.tsx
---
import React, { FunctionComponent } from 'react'
import styles from './<%= h.inflection.underscore(name) %>.module.scss'
import I<%= h.inflection.camelize(name) %> from './<%= h.inflection.underscore(name) %>.interface'

const <%= h.inflection.camelize(name) %>Module:FunctionComponent<{ module: I<%= h.inflection.camelize(name) %> }> = ({ module }) => (
  <div
    className={`${styles.root} container`}
  >
    <%= h.inflection.humanize(name) %> Module
    {console.log(module)}
  </div>
)

export default <%= h.inflection.camelize(name) %>Module
