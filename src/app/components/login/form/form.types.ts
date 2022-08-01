export interface IForm {
  title: string
  subTitle: string
  isSignUp: boolean
  buttonText: string
  error?: boolean
}

export interface IInputs {
  name?: string
  email: string
  password: string
}
