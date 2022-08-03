export type SettingsFormFields = {
  email: string
  username: string
  bio: string
  image: string
  password: string
}

export type SettingData = keyof SettingsFormFields
