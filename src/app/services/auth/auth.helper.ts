import Cookies from 'js-cookie'

import { IUserResponse } from '@/shared/interfaces/user.interface'

export const removeTokenFromStorage = () => {
  Cookies.remove('accessToken')
}

export const saveToStorage = (data: IUserResponse) => {
  Cookies.set('accessToken', data.user.token || '')
}
