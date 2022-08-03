import Cookies from 'js-cookie'

import { IAuthResponse } from '@/shared/interfaces/user.interface'

export const saveTokenToStorage = (accessToken: string) => {
  Cookies.set('accessToken', accessToken)
}

export const removeTokenFromStorage = () => {
  Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokenToStorage(data.user.token)
  localStorage.setItem('user', JSON.stringify(data.user))
}
