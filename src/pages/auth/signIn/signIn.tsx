import { useTitle } from 'react-use'

import { AuthForm } from '@/shared/ui'

export const SignInPage = () => {
  useTitle('SignIn — Conduit')
  return <AuthForm title={'Sign in'} subTitle={'Need an account?'} />
}
