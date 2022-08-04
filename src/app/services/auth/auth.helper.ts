import Cookies from 'js-cookie'

import { IAuthResponse } from '@/shared/interfaces/user.interface'

export const removeTokenFromStorage = () => {
  Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthResponse) => {
  Cookies.set('accessToken', data.user.token)
}
