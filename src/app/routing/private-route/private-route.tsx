import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { routes } from '@/app/routing/routes'

interface PropType {
  children: JSX.Element
}

export const PrivateRoute: FC<PropType> = ({ children }) => {
  const user = localStorage.getItem('user')

  return !user ? <Navigate to={routes.LOGIN} /> : children
}
