import { RouteObject } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { namedLazy } from '@/shared/lib/namedLazy'
import { Suspensy } from '@/shared/ui/suspensy'

const HomePage = namedLazy(() => import('@/pages'), 'HomePage')
const SettingsPage = namedLazy(() => import('@/pages'), 'SettingsPage')
const EditorPage = namedLazy(() => import('@/pages'), 'EditorPage')
const ProfilePage = namedLazy(() => import('@/pages'), 'ProfilePage')
const ArticlePage = namedLazy(() => import('@/pages'), 'ArticlePage')

export const homeRouting: RouteObject[] = [
  {
    path: routes.HOME_PAGE,
    index: true,
    element: (
      <Suspensy>
        <HomePage />
      </Suspensy>
    ),
  },
  {
    path: routes.FEED_BY_TAG,
    index: true,
    element: (
      <Suspensy>
        <HomePage />
      </Suspensy>
    ),
  },
  {
    path: routes.SETTINGS_PAGE,
    element: (
      <Suspensy>
        <SettingsPage />
      </Suspensy>
    ),
  },
  {
    path: routes.EDITOR_PAGE,
    element: (
      <Suspensy>
        <EditorPage />
      </Suspensy>
    ),
  },
  {
    path: routes.EDITOR_BY_SLUG,
    element: (
      <Suspensy>
        <EditorPage />
      </Suspensy>
    ),
  },
  {
    path: routes.PROFILE_PAGE,
    element: (
      <Suspensy>
        <ProfilePage />
      </Suspensy>
    ),
  },
  {
    path: routes.ARTICLE_BY_SLUG,
    element: (
      <Suspensy>
        <ArticlePage />
      </Suspensy>
    ),
  },
]
