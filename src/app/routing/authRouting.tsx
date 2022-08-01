import { RouteObject } from 'react-router-dom'

// import { routes } from '@/app/routing/routes'
import { Suspensy } from '@/shared/ui/suspensy'
import { namedLazy } from '@/shared/utils/namedLazy'

const SignIn = namedLazy(() => import('@/pages/home'), 'Home')
const SignUp = namedLazy(() => import('@/pages/signUp'), 'SignUp')

export const authRouting: RouteObject[] = [
  {
    path: '/login',
    element: (
      <Suspensy>
        <SignIn />
      </Suspensy>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspensy>
        <SignUp />
      </Suspensy>
    ),
  },
]
