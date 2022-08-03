import { useTitle } from 'react-use'

import { AuthForm } from '@/shared/ui'

export const SignUpPage = () => {
  useTitle('SignUp — Conduit')
  return <AuthForm title={'Sign Up'} subTitle={'Have an account?'} />
}
