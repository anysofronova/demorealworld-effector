import { Tab } from '@headlessui/react'
import { useList, useUnit } from 'effector-react'
import { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import {
  $articles,
  $feedArticles,
  getArticlesFx,
  getFeedArticlesFx,
  isPendingFeed,
  SingleArticle,
} from '@/entities/article'
import { isPending } from '@/pages/home/model'
import { useAuth } from '@/shared/hooks/useAuth'
import { IArticle } from '@/shared/interfaces'
import { ArticleListSkeleton } from '@/shared/ui'

export const Tabs = memo(() => {
  const articles = useUnit($articles)
  const isLoading = useUnit(isPending)
  const feedArticles = useUnit($feedArticles)
  const isLoadingFeed = useUnit(isPendingFeed)
  const { user } = useAuth()
  const isAuth = Boolean(user)
  const articlesList = useList<IArticle>($articles, {
    keys: [articles],
    fn: (article, index) => <SingleArticle key={article.slug} index={index} />,
  })
  const feedArticlesList = useList<IArticle>($feedArticles, {
    keys: [feedArticles],
    fn: (article, index) => <SingleArticle key={article.slug} index={index} />,
  })
  useEffect(() => {
    if (isAuth) getFeedArticlesFx()
    getArticlesFx()
  }, [])

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
              {isLoadingFeed ? (
                <ArticleListSkeleton />
              ) : feedArticles.length > 0 ? (
                <>{feedArticlesList}</>
              ) : (
                <div className="text-center font-light text-2xl py-8">
                  No articles are here... yet.
                </div>
              )}
            </Tab.Panel>
          )}
          <Tab.Panel>
            {isLoading ? <ArticleListSkeleton /> : <>{articlesList}</>}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
})

Tabs.displayName = 'Tabs'
