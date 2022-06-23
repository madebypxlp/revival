export default interface IFormBuilder {
  module: GeneralInput[]
}

export type GeneralInput =
  | Input
  | Textarea
  | Dropdown
  | AreaSelect
  | FileUpload
  | TermsAndConditions

interface BaseInput {
  fullwidth: boolean
  placeholder: string
  required: boolean
}

export interface Input extends BaseInput {
  fieldGroupName: 'FormBuilder_Input'
  type: 'text' | 'email' | 'tel' | 'date' | 'number'
}

export interface Textarea extends BaseInput {
  fieldGroupName: 'FormBuilder_Textarea'
}

export interface Dropdown extends BaseInput {
  fieldGroupName: 'FormBuilder_Dropdown'
  options: [
    {
      option: string
    }
  ]
}

export interface AreaSelect extends BaseInput {
  fieldGroupName: 'FormBuilder_AreaSelect'
  type: 'country' | 'state'
}

export interface FileUpload {
  fieldGroupName: 'FormBuilder_FileUpload'
  label: string
  note: string
  required: boolean
  fullwidth: boolean
}

export interface TermsAndConditions {
  fieldGroupName: 'FormBuilder_TermsAndConditions'
  note: string
}
