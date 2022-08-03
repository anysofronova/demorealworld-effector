import { object, string } from 'yup'

export const articleFormSchema = object({
  title: string().required(),
  description: string().required(),
  body: string().required(),
  tagList: string().optional(),
})
