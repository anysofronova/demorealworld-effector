import { SettingsFormFields } from '@/pages/settings/ui/settings-form/settings-form.types'
import { request } from '@/shared/http'
import { IUserResponse } from '@/shared/interfaces'

class UserService {
  async updateUserProfile(data: SettingsFormFields) {
    return await request<IUserResponse>({
      url: '/api/user',
      method: 'put',
      data,
    })
  }
  async getUserProfile() {
    return await request<IUserResponse>({
      url: '/api/user',
      method: 'get',
    })
  }
}

export const userService = new UserService()
