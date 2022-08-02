import { ApiResponse } from '@/app/config/enums/urls'
import {
  removeTokenFromStorage,
  saveToStorage,
} from '@/app/services/auth/auth.helper'
import { axiosClassic } from '@/shared/http'
import { IAuthResponse } from '@/shared/interfaces/user.interface'

class AuthService {
  async login(email: string, password: string) {
    const response = await axiosClassic.post<DataResult<IAuthResponse>>(
      ApiResponse.LOGIN,
      {
        user: { email, password },
      },
    )

    if (response.data.user.token) {
      saveToStorage(response.data)
    }

    return response.data
  }

  async register(username: string, email: string, password: string) {
    const response = await axiosClassic.post<DataResult<IAuthResponse>>(
      ApiResponse.REGISTER,
      {
        user: { username, email, password },
      },
    )

    if (response.data.user.token) {
      saveToStorage(response.data)
    }

    return response.data
  }

  logout() {
    removeTokenFromStorage()
    localStorage.removeItem('accessToken')
  }
}

export default new AuthService()
