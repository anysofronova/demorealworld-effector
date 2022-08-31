import { IProfile } from '@/shared/interfaces'

export const saveProfileToStorage = (data: IProfile) => {
  localStorage.setItem('profile', JSON.stringify(data))
}
