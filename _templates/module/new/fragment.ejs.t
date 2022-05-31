---
to: components/modules/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.graphql.ts
---
const <%= h.inflection.camelize(name) %>Fragment = (t: string) => `
  fragment <%= h.inflection.camelize(name) %>_${t} on ${t}_<%= h.inflection.camelize(name) %> {
    fieldGroupName
  }
`
export default <%= h.inflection.camelize(name) %>Fragment
