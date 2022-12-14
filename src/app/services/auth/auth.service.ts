import {
  removeTokenFromStorage,
  saveToStorage,
} from '@/app/services/auth/auth.helper'
import { axiosClassic } from '@/shared/api/http'
import { ApiResponse } from '@/shared/config/enums'
import { IUserResponse } from '@/shared/interfaces'

class AuthService {
  async login(email: string, password: string) {
    const response = await axiosClassic.post<IUserResponse>(ApiResponse.LOGIN, {
      user: { email, password },
    })

    if (response.data.user.token) {
      saveToStorage(response.data)
    }

    return response.data
  }

  async register(username: string, email: string, password: string) {
    const response = await axiosClassic.post<IUserResponse>(
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
    localStorage.removeItem('profile')
  }
}

export const authService = new AuthService()
