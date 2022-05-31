---
to: components/modules/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.interface.ts
---

export default interface I<%= h.inflection.camelize(name) %> {
  fieldGroupName: string
}
