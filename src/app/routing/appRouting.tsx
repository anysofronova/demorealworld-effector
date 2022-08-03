import { RouteObject } from 'react-router-dom'

import { authRouting } from '@/app/routing/authRouting'
import { homeRouting } from '@/app/routing/homeRouting'
import { MainLayout } from '@/shared/ui/layouts/main-layout'

export const appRouting: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [...homeRouting, ...authRouting],
  },
]
