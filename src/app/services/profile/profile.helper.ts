import { IProfileResponse } from '@/shared/interfaces'

export const saveProfileToStorage = (data: IProfileResponse) => {
  localStorage.setItem('profile', JSON.stringify(data.profile))
}
