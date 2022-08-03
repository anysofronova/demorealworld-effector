export type SettingsFormFields = {
  email: string
  username: string
  bio: string
  image: string
  password: string
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export type SettingData = Entries<Obj>
