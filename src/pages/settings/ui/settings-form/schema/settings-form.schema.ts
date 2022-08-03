import { object, string } from 'yup'

export const settingsFormSchema = object({
  image: string().optional(),
  username: string().required(),
  bio: string().optional(),
  email: string().email().optional(),
  password: string().optional(),
})
