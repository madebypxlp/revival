---
to: components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.graphql.ts
---
const <%= h.inflection.camelize(name) %>Fragment = (t: string) => `
  fragment <%= h.inflection.camelize(name) %> on ${t}_<%= h.inflection.camelize(name) %> {
    fieldGroupName
  }
`
export default <%= h.inflection.camelize(name) %>Fragment
