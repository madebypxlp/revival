const FormBuilderFragment = (t: string) => `
  fragment FormBuilder_${t} on ${t}_FormBuilder {
    ... on ${t}_FormBuilder_Input {
      fieldGroupName
      fullwidth
      placeholder
      required
      type
    }
    ... on ${t}_FormBuilder_Textarea {
      fieldGroupName
      fullwidth
      placeholder
      required
    }
    ... on ${t}_FormBuilder_FileUpload {
      fieldGroupName
      label
      note
      required
    }
    ... on ${t}_FormBuilder_TermsAndConditions {
      fieldGroupName
      note
    }
    ... on ${t}_FormBuilder_Input {
      fieldGroupName
      fullwidth
      placeholder
      type
      required
    }
    ... on ${t}_FormBuilder_Dropdown {
      fieldGroupName
      fullwidth
      placeholder
      required
      options {
        option
      }
    }
    ... on ${t}_FormBuilder_AreaSelect {
      fieldGroupName
      fullwidth
      placeholder
      required
      type
    }
  }
`
export default FormBuilderFragment
