import { ApiResponse } from '@/app/config/enums/urls'
import {
  removeTokenFromStorage,
  saveToStorage,
} from '@/app/services/auth/auth.helper'
import { axiosClassic } from '@/shared/http'
import { IAuthResponse } from '@/shared/interfaces/user.interface'

class AuthService {
  async login(email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(ApiResponse.LOGIN, {
      email,
      password,
    })

    if (response.data.user.token) {
      saveToStorage(response.data)
    }

    return response.data
  }

  async register(email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      ApiResponse.REGISTER,
      {
        email,
        password,
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
