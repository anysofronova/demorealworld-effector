import { FC, PropsWithChildren } from 'react'

export const FormErrorMessage: FC<PropsWithChildren> = ({ children }) => (
  <p className="text-sm text-left block text-red-600 mt-1">{children}</p>
)
