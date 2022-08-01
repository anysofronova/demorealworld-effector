import { RouteObject } from 'react-router-dom'

import { authRouting } from '@/app/routing/authRouting'
import { homeRouting } from '@/app/routing/homeRouting'
import { MainLayout } from '@/shared/ui/layouts/main-layout'
import { namedLazy } from '@/shared/utils/namedLazy'

const Home = namedLazy(() => import('@/pages/home'), 'Home')

export const appRouting: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [...homeRouting, ...authRouting],
  },
]
