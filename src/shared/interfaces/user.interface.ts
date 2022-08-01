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
