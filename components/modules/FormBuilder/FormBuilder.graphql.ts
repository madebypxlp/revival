const FormBuilderFragment = (t: string) => `
  fragment FormBuilder_${t} on ${t}_FormBuilder {
    fieldGroupName
  }
`
export default FormBuilderFragment
