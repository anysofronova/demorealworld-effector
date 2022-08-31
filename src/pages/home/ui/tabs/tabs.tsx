import { Tab } from '@headlessui/react'
import { memo, useEffect, useState } from 'react'
import { HiOutlineHashtag } from 'react-icons/all'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { getArticlesFx } from '@/entities/article'
import { FeedByTagPage } from '@/pages/home/pages/feed-by-tag'
import GlobalFeedPage from '@/pages/home/pages/global-feed'
import { YourFeedPage } from '@/pages/home/pages/your-feed'
import { useAuth } from '@/shared/hooks/useAuth'

export const Tabs = memo(() => {
  const { user } = useAuth()
  const location = useLocation()
  const tag = location.search.split('=')[1]
  const isAuth = Boolean(user)
  const [selectedIndex, setSelectedIndex] = useState(tag ? 2 : 0)
  useEffect(() => {
    isAuth && getArticlesFx()
  }, [isAuth])
  useEffect(() => {
    setSelectedIndex(tag ? 2 : selectedIndex)
  }, [location])

  return (
    <div className="sm:container sm:mx-auto mt-4 px-2">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
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
            <NavLink to={routes.HOME_PAGE}>
              <Tab
                className={({ selected }) =>
                  selected
                    ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                    : 'text-neutral-500 font-light text-lg px-4 py-2'
                }
              >
                Global Feed
              </Tab>
            </NavLink>
          ) : null}
          {tag && (
            <Tab
              className={({ selected }) =>
                selected
                  ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                  : 'text-neutral-500 font-light text-lg px-4 py-2'
              }
            >
              <div className="flex items-center">
                <HiOutlineHashtag className="mr-2" />
                {tag}
              </div>
            </Tab>
          )}
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
          {tag && (
            <Tab.Panel>
              <FeedByTagPage />
            </Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
})

Tabs.displayName = 'Tabs'
