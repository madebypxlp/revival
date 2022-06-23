const FormBuilderFragment = (t: string) => `
  fragment FormBuilder_${t} on ${t}_FormBuilder {
    ... on ${t}_FormBuilder_Input {
      fieldGroupName
      fullwidth
    }
  }
`
export default FormBuilderFragment
