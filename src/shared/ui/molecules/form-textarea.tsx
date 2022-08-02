import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
import get from 'lodash.get'
import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import {
  DeepMap,
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

import { FormErrorMessage } from '@/shared/ui/atoms'

export type FormTextareaProps<TFormValues> = {
  id: string
  name: Path<TFormValues>
  label: string
  className?: string
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>>
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export const FormTextarea = <TFormValues extends Record<string, any>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
  className,
  ...props
}: FormTextareaProps<TFormValues>): JSX.Element => {
  // If the name is in a FieldArray, it will be 'fields.index.ts.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = get(errors, name)
  const hasError = Boolean(errors && errorMessages)

  return (
    <div className={className}>
      <textarea
        id={id}
        name={name}
        aria-label={label}
        aria-invalid={Boolean(errors && errorMessages)}
        className={classNames(
          'block w-full appearance-none relative inline-flex p-3 text-base rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30 overflow-auto resize-none',
          hasError
            ? 'focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600'
            : '',
        )}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  )
}
