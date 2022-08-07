import { Tab } from '@headlessui/react'
import { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { getArticlesFx } from '@/entities/article'
import GlobalFeedPage from '@/pages/home/pages/global-feed'
import { YourFeedPage } from '@/pages/home/pages/your-feed'
import { useAuth } from '@/shared/hooks/useAuth'

export const Tabs = memo(() => {
  const { user } = useAuth()
  const isAuth = Boolean(user)
  useEffect(() => {
    isAuth && getArticlesFx()
  }, [isAuth])

  return (
    <div className="sm:container sm:mx-auto mt-4 px-2">
      <Tab.Group>
        <Tab.List className="border-b border-neutral-500">
          <NavLink to={routes.HOME_PAGE}>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                  : 'text-neutral-500 font-light text-lg px-4 py-2'
              }
            >
              {isAuth ? 'Your Feed' : 'Global Feed'}
            </Tab>
          </NavLink>
          {isAuth ? (
            <Tab
              className={({ selected }) =>
                selected
                  ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                  : 'text-neutral-500 font-light text-lg px-4 py-2'
              }
            >
              Global Feed
            </Tab>
          ) : null}
        </Tab.List>
        <Tab.Panels>
          {isAuth && (
            <Tab.Panel>
              <YourFeedPage />
            </Tab.Panel>
          )}
          <Tab.Panel>
            <GlobalFeedPage />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
})

Tabs.displayName = 'Tabs'
