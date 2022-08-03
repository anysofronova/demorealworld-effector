import { RouteObject } from 'react-router-dom'

import { PrivateRoute } from '@/app/routing/private-route'
import { routes } from '@/app/routing/routes'
import { Suspensy } from '@/shared/ui/suspensy'
import { namedLazy } from '@/shared/utils/namedLazy'

const HomePage = namedLazy(() => import('@/pages'), 'HomePage')
const SettingsPage = namedLazy(() => import('@/pages'), 'SettingsPage')
const EditorPage = namedLazy(() => import('@/pages'), 'EditorPage')
const ProfilePage = namedLazy(() => import('@/pages'), 'ProfilePage')

export const homeRouting: RouteObject[] = [
  {
    path: routes.HOME_PAGE,
    index: true,
    element: (
      <Suspensy>
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      </Suspensy>
    ),
  },
  {
    path: routes.SETTINGS_PAGE,
    element: (
      <Suspensy>
        <PrivateRoute>
          <SettingsPage />
        </PrivateRoute>
      </Suspensy>
    ),
  },
  {
    path: routes.EDITOR_PAGE,
    element: (
      <Suspensy>
        <PrivateRoute>
          <EditorPage />
        </PrivateRoute>
      </Suspensy>
    ),
  },
  {
    path: routes.PROFILE_PAGE,
    element: (
      <Suspensy>
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      </Suspensy>
    ),
  },
]
