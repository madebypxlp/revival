import React, { FunctionComponent } from 'react'
import styles from './FormBuilder.module.scss'
import IFormBuilder, { GeneralInput } from './FormBuilder.interface'
import Input from '@components/ui/Input/Input'
import cn from 'classnames'
import Dropdown from '@components/ui/Dropdown/Dropdown'
import { IDropdownOption } from '@components/ui/Dropdown/Dropdown.interface'
import { OnChangeValue } from 'react-select'
import Button from '@components/ui/Button/Button'
import Translations from 'constants/translations'
import parse from 'html-react-parser'

const FormBuilderModule: FunctionComponent<IFormBuilder> = ({ module }) => {
  // strip fieldGroupName prefix vom fields
  // in order to make type deductible from it
  module = module.map((el) => {
    el.fieldGroupName = el.fieldGroupName
      .split('_')
      .slice(-2)
      .join('_') as GeneralInput['fieldGroupName']
    return el
  })
  //

  const handleChange = (
    value: string | OnChangeValue<IDropdownOption, boolean>
  ) => {
    console.log(value)
  }

  return (
    <div className={`${styles.root} container`}>
      <form className="md:default-grid">
        {module.map((input) => {
          const defaultProps = {
            className: cn(
              'self-start mb-10 md:mb-25',
              !('fullwidth' in input) || input.fullwidth
                ? 'md:col-span-10'
                : 'md:col-span-5'
            ),
            onChange: handleChange,
          }
          switch (input.fieldGroupName) {
            case 'FormBuilder_Input': {
              const { fieldGroupName, fullwidth, ...rest } = input
              return <Input {...defaultProps} weight="bold" {...rest} />
            }

            case 'FormBuilder_Textarea': {
              const { fieldGroupName, fullwidth, ...rest } = input
              return <Input {...defaultProps} weight="bold" {...rest} />
            }

            case 'FormBuilder_Dropdown': {
              const { fieldGroupName, fullwidth, options, ...rest } = input
              const formattedOptions = options.map(({ option }) => {
                return { value: option, label: option }
              })
              return (
                <Dropdown
                  options={formattedOptions}
                  color="light"
                  {...defaultProps}
                  {...rest}
                />
              )
            }

            case 'FormBuilder_AreaSelect': {
              const { fieldGroupName, ...rest } = input
              {
                /* TODO: fetch options depending on type */
              }
              const options = [
                { label: 'Area 1', value: 'area-1' },
                { label: 'Area 2', value: 'area-2' },
              ]
              return (
                <Dropdown
                  options={options}
                  color="light"
                  {...defaultProps}
                  {...rest}
                />
              )
            }

            case 'FormBuilder_FileUpload': {
              // TODO: add field type
              return null
            }

            case 'FormBuilder_TermsAndConditions': {
              const { note, ...rest } = input

              return (
                <div className={defaultProps.className}>
                  {note && (
                    <div className="typo-form-note mb-25">{parse(note)}</div>
                  )}
                  {/* TODO: add checkbox */}
                </div>
              )
            }
          }
        })}

        <div className="col-span-full my-70">
          <Button color="yellow" variant="large" buttonType="submit">
            {Translations.FORM.SUBMIT}
          </Button>
          <p className="mt-40 typo-legal-text">
            {Translations.FORM.REQUIRED_EXPLANATION}
          </p>
        </div>
      </form>
    </div>
  )
}

export default FormBuilderModule
