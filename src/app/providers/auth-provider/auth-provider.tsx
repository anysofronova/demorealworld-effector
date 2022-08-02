import Cookies from 'js-cookie'
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import { useLocation } from 'react-use'

import AuthService from '@/app/services/auth/auth.service'

import { IContext, UserState } from './auth.interface'

export const AuthContext = createContext({} as IContext)

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<UserState | null>(null)

  const { pathname } = useLocation()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')

    if (accessToken) {
      const user = JSON.parse(localStorage.getItem('user') || '')
      setUser(user)
    }
  }, [])

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')

    if (!accessToken && !user) {
      AuthService.logout()
      setUser(null)
    }
  }, [pathname, user])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}