import { Dispatch, SetStateAction } from 'react'

import { IUser } from '@/shared/interfaces/user.interface'

export type UserState = IUser | null

export interface IContext {
  user: UserState
  setUser: Dispatch<SetStateAction<UserState>>
}
