import clsx from 'clsx'
import get from 'lodash.get'
import { ErrorMessage } from '@hookform/error-message'

import { FormInputProps } from './formInput.types'
import { Input } from '@/shared/ui/login/registrationForm/formInput/Input/Input'
import { FormErrorMessage } from '@/shared/ui/login/registrationForm/formInput/formErrorMessage'

export const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  className,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name)
  const hasError = !!(errors && errorMessages)
  console.log(errors)
  return (
    <div className={clsx('w-2/3 ', className)} aria-live="polite">
      <Input
        name={name}
        aria-invalid={hasError}
        className={clsx({
          'outline-none transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600':
            hasError,
        })}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }: any) => (
          <FormErrorMessage>{message}</FormErrorMessage>
        )}
      />
    </div>
  )
}
