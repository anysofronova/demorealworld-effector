import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/shared/hooks/useAuth'

interface PropType {
  children: JSX.Element
}

export const PrivateRoute: FC<PropType> = ({ children }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to="/" />
  }
  return children
}
