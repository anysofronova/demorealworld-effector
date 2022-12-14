import { RouteObject } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { namedLazy } from '@/shared/lib/namedLazy'
import { Suspensy } from '@/shared/ui/suspensy'

const SignInPage = namedLazy(() => import('@/pages'), 'SignInPage')
const SignUpPage = namedLazy(() => import('@/pages'), 'SignUpPage')

export const authRouting: RouteObject[] = [
  {
    path: routes.LOGIN,
    element: (
      <Suspensy>
        <SignInPage />
      </Suspensy>
    ),
  },
  {
    path: routes.REGISTER,
    element: (
      <Suspensy>
        <SignUpPage />
      </Suspensy>
    ),
  },
]
