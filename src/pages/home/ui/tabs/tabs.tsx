import { Tab } from '@headlessui/react'
import { useList, useStore } from 'effector-react'
import { memo, useEffect } from 'react'

import {
  $articles,
  getArticlesFx,
  isPending,
  SingleArticle,
} from '@/entities/article'
import { useAuth } from '@/shared/hooks/useAuth'
import { IArticle } from '@/shared/interfaces'
import { ArticleListSkeleton } from '@/shared/ui'

export const Tabs = memo(() => {
  const articles = useStore($articles)
  const { user } = useAuth()
  const isLoggedIn = Boolean(user)
  const articlesList = useList<IArticle>($articles, {
    keys: [articles],
    fn: (article, index) => <SingleArticle key={article.slug} index={index} />,
  })
  const isLoading = useStore(isPending)

  useEffect(() => {
    getArticlesFx()
  }, [])

  return (
    <div className="sm:container sm:mx-auto mt-4 px-2">
      <Tab.Group>
        <Tab.List className="border-b border-neutral-500">
          {isLoggedIn && (
            <Tab
              className={({ selected }) =>
                selected
                  ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                  : 'text-neutral-500 font-light text-lg px-4 py-2'
              }
            >
              Your Feed
            </Tab>
          )}
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                : 'text-neutral-500 font-light text-lg px-4 py-2'
            }
          >
            Global Feed
          </Tab>
        </Tab.List>
        <Tab.Panels>
          {isLoggedIn && <Tab.Panel>Content 1</Tab.Panel>}
          {isLoading ? (
            <ArticleListSkeleton />
          ) : (
            <Tab.Panel>{articlesList}</Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
})

Tabs.displayName = 'Tabs'
