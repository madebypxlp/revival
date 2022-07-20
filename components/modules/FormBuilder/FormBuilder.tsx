import React, { FunctionComponent, useEffect, useState } from 'react'
import Input from '@components/ui/Input/Input'
import cn from 'classnames'
import Dropdown from '@components/ui/Dropdown/Dropdown'
import { IDropdownOption } from '@components/ui/Dropdown/Dropdown.interface'
import { OnChangeValue } from 'react-select'
import Button from '@components/ui/Button/Button'
import Translations from 'constants/translations'
import parse from 'html-react-parser'
import useSWR from 'swr'
import { InputError } from '@components/ui/Input/Input.interface'
import states from './states'
import IFormBuilder, { GeneralInput } from './FormBuilder.interface'
import styles from './FormBuilder.module.scss'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const FormBuilderModule: FunctionComponent<IFormBuilder> = ({ module }) => {
  // strip fieldGroupName prefix from fields
  // in order to make type deductible from it
  module = module.map((el) => {
    el.fieldGroupName = el.fieldGroupName
      .split('_')
      .slice(-2)
      .join('_') as GeneralInput['fieldGroupName']
    return el
  })
  //

  const { data: countries, error: countriesError } = useSWR<any[]>(
    'https://restcountries.com/v3.1/all?fields=name',
    fetcher
  )

  const handleChange = (
    value:
      | string
      | boolean
      | FileList
      | OnChangeValue<IDropdownOption, boolean>,
    error: InputError | undefined
  ) => {
    //  console.log(value)
    //  console.log(error)
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
                  className={defaultProps.className}
                  onChange={(v) => handleChange(v, false)}
                  {...rest}
                />
              )
            }

            case 'FormBuilder_AreaSelect': {
              const { fieldGroupName, type, ...rest } = input
              const options = []
              if (type === 'state') {
                options.push(
                  ...Object.entries(states).map(([key, name]) => {
                    return { label: name, value: key }
                  })
                )
              } else if (countries?.length) {
                options.push(
                  ...countries.map((country) => {
                    return {
                      label: country.common,
                      value: country.common,
                    }
                  })
                )
              }
              return (
                <Dropdown
                  options={options}
                  color="light"
                  className={cn(defaultProps.className, 'mb-25 md:mb-50')}
                  onChange={(v) => handleChange(v, false)}
                  {...rest}
                />
              )
            }

            case 'FormBuilder_FileUpload': {
              const { fieldGroupName, fullwidth, note, ...rest } = input
              return (
                <Input
                  type="file"
                  multiple
                  {...defaultProps}
                  weight="bold"
                  {...rest}
                  status={
                    note && (
                      <div className="typo-form-note font-normal my-10">
                        {parse(note)}
                      </div>
                    )
                  }
                />
              )
            }

            case 'FormBuilder_TermsAndConditions': {
              const { fieldGroupName, note, ...rest } = input

              return (
                <div className={defaultProps.className}>
                  {note && (
                    <div className="typo-form-note mb-25">{parse(note)}</div>
                  )}
                  <Input
                    type="checkbox"
                    label={Translations.FORM.TERMS_AND_CONDITIONS}
                    onChange={defaultProps.onChange}
                    {...rest}
                  />
                </div>
              )
            }

            default: {
              return null
            }
          }
        })}

        <div className="col-span-full mt-20 mb-70">
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
