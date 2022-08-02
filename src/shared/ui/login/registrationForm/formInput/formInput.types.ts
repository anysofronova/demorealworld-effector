import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
} from 'react-hook-form'
import {
  Input,
  InputProps,
} from '@/shared/ui/login/registrationForm/formInput/Input'

export type FormInputProps<TFormValues> = {
  name: Path<TFormValues>
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>>
} & Omit<InputProps, 'name'>
