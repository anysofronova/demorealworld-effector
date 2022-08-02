export interface IUser {
  email: string
  username: string
  bio: string | null
  image: string | null
  token: string
}

export interface IAuthResponse {
  user: IUser
}

type DataResult<T> = {
  success: boolean
  errors?: { [P in keyof T]?: string[] }
}
