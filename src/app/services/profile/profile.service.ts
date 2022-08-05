import { saveProfileToStorage } from '@/app/services/profile/profile.helper'
import { request } from '@/shared/http'
import { IProfileResponse } from '@/shared/interfaces'

class ProfileService {
  async getProfileByUsername(username: string) {
    const response = await request<IProfileResponse>({
      url: `/api/profiles/${username}`,
      method: 'get',
    })
    if (response.profile) saveProfileToStorage(response)
    return response
  }
  async followProfile(username: string) {
    await request<IProfileResponse>({
      url: `/api/profiles/${username}/follow`,
      method: 'post',
    })
  }
  async unfollowProfile(username: string) {
    await request<IProfileResponse>({
      url: `/api/profiles/${username}/follow`,
      method: 'delete',
    })
  }
}

export const profileService = new ProfileService()
