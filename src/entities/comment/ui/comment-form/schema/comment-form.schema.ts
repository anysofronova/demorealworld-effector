import { object, string } from 'yup'

export const commentFormSchema = object({
  body: string().required(),
})
