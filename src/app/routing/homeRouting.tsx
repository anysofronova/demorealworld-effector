import { RouteObject } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { Suspensy } from '@/shared/ui/suspensy'
import { namedLazy } from '@/shared/utils/namedLazy'

const Home = namedLazy(() => import('@/pages/home'), 'Home')

export const homeRouting: RouteObject[] = [
  {
    path: routes.HOME,
    element: (
      <Suspensy>
        <Home />
      </Suspensy>
    ),
    index: true,
  },
]
