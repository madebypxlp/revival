---
to: components/modules/<%= h.inflection.underscore(name) %>/<%= h.inflection.underscore(name) %>.interface.ts
---

export default interface I<%= h.inflection.camelize(name) %> {
  fieldGroupName: string
}
