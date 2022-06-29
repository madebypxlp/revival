import {
  OnChangeValue,
  GroupBase,
  OptionsOrGroups,
  ActionMeta,
} from 'react-select'

export interface IDropdownOption {
  value: string
  label: string
}

export default interface IDropdown {
  placeholder: string
  defaultInputValue?: string
  className?: string
  color?: 'default' | 'light'
  onChange: (
    newValue: OnChangeValue<IDropdownOption, false>,
    actionMeta: ActionMeta<IDropdownOption>
  ) => void
  options: OptionsOrGroups<IDropdownOption, GroupBase<IDropdownOption>>
}
