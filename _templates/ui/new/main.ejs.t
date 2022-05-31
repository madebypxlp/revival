---
to: components/ui/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.tsx
---
import React, { FunctionComponent } from 'react'
import styles from './<%= h.inflection.camelize(name) %>.module.scss'
import I<%= h.inflection.camelize(name) %> from './<%= h.inflection.camelize(name) %>.interface'

const <%= h.inflection.camelize(name) %>:FunctionComponent<{ props: I<%= h.inflection.camelize(name) %> }> = ({ props }) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      <%= h.inflection.humanize(name) %>
      {console.log(props)}
    </div>
  )
}

export default <%= h.inflection.camelize(name) %>
