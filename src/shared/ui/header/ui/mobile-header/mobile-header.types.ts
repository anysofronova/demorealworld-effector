import { IUser } from '@/shared/interfaces/user.interface'

export type MobileHeaderTypes = {
  disableMode: () => void
  mode: boolean
  isLoggedIn: boolean
  user: IUser | null
}
