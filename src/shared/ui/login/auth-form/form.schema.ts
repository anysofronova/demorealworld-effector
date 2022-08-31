import { object, string } from 'yup'

export const formValidationSchema = object({
  username: string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field')
    .min(3, 'Name should be at least 3 characters'),
  email: string()
    .email('Email should be valid, please try again!')
    .required('Email field is required!'),
  password: string()
    .min(3, 'Password should be at least 3 characters')
    .required('Password field is required!'),
})
