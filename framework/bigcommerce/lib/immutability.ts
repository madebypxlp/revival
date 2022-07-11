import update, { Context } from 'immutability-helper'

const c = new Context()

c.extend('$auto', (value, object) =>
  object ? c.update(object, value) : c.update({}, value)
)

c.extend('$autoArray', (value, object) =>
  object ? c.update(object, value) : c.update([], value)
)

export default c.update
