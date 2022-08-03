export interface IProfile {
  username: string
  bio: string | null
  image: string
  following: boolean
}

export interface IProfileResponse {
  profile: IProfile
}
