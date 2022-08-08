import { useEffect } from 'react'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'

import { Feed } from '@/entities/article/ui/feed'
import { Pagination } from '@/shared/ui/pagination'

import * as model from './model'

type Props = Readonly<{
  pageSize?: number
}>

export const YourFeedPage = ({ pageSize = 10 }: Props) => {
  const feed = useFeed(pageSize)

  return (
    <>
      <Feed
        articlesStore={model.$articles}
        isEmpty={feed.isEmpty}
        loading={feed.loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={feed.page}
        pageSize={pageSize}
        total={feed.totalPages}
        onPageChange={feed.handlePageChange}
      />
    </>
  )
}

function useFeed(pageSize: number) {
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1))
  const loading = model.selectors.useGetFeedLoading()
  const isEmpty = model.selectors.useIsEmptyFeed()
  const totalPages = model.selectors.useTotalPages()

  useEffect(() => {
    model.getFeedFx({ pageSize, page })
  }, [page, pageSize])

  const handlePageChange = (x: number) => {
    setPage(x)
  }

  return {
    page,
    loading,
    isEmpty,
    totalPages,
    handlePageChange,
  }
}
