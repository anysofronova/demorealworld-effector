import { RouteObject } from 'react-router-dom'

import { PrivateRoute } from '@/app/routing/private-route'
import { routes } from '@/app/routing/routes'
import { Suspensy } from '@/shared/ui/suspensy'
import { namedLazy } from '@/shared/utils/namedLazy'

const Home = namedLazy(() => import('@/pages/home'), 'Home')

export const homeRouting: RouteObject[] = [
  {
    path: routes.HOME,
    element: (
      <Suspensy>
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      </Suspensy>
    ),
    index: true,
  },
]
