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

type IDropdown = {
  placeholder: string
  defaultInputValue?: string
  className?: string
  color?: 'default' | 'light'
  options: OptionsOrGroups<IDropdownOption, GroupBase<IDropdownOption>>
} & (
  | {
      isMulti: true
      onChange: (
        newValue: OnChangeValue<IDropdownOption, true>,
        actionMeta: ActionMeta<IDropdownOption>
      ) => void
    }
  | {
      isMulti?: false
      onChange: (
        newValue: OnChangeValue<IDropdownOption, false>,
        actionMeta: ActionMeta<IDropdownOption>
      ) => void
    }
)

export default IDropdown
