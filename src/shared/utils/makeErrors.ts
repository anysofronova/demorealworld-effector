import { toast } from 'react-toastify'

type ServerErrors = {
  errors: Record<string, string[]>
}

export const makeErrors = <T extends ServerErrors>(errors: T[]): void => {
  Object.entries(errors).forEach(([err, message]) =>
    toast.error(`[${err}]: ${message}`),
  )
}
