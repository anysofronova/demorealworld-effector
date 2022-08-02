import { RouteObject } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { Suspensy } from '@/shared/ui/suspensy'
import { namedLazy } from '@/shared/utils/namedLazy'

const SignIn = namedLazy(() => import('@/pages/signIn'), 'SignIn')
const SignUp = namedLazy(() => import('@/pages/signUp'), 'SignUp')

export const authRouting: RouteObject[] = [
  {
    path: routes.LOGIN,
    element: (
      <Suspensy>
        <SignIn />
      </Suspensy>
    ),
  },
  {
    path: routes.REGISTER,
    element: (
      <Suspensy>
        <SignUp />
      </Suspensy>
    ),
  },
]
