import { useEffect } from 'react'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'

import { Feed } from '@/entities/article/ui/feed'
import { Pagination } from '@/shared/ui/pagination'

import * as model from './model'

type Props = Readonly<{
  pageSize?: number
  favorited: string
}>

export const FavoritedArticles = ({ favorited, pageSize = 10 }: Props) => {
  const favoritedArticles = useFavoritedArticles(pageSize, favorited)
  return (
    <>
      <Feed
        articlesStore={model.$articles}
        isEmpty={favoritedArticles.isEmpty}
        loading={favoritedArticles.loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={favoritedArticles.page}
        pageSize={pageSize}
        total={favoritedArticles.totalPages}
        onPageChange={favoritedArticles.handlePageChange}
      />
    </>
  )
}

function useFavoritedArticles(pageSize: number, favorited: string) {
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1))
  const loading = model.selectors.useGetFeedLoading()
  const isEmpty = model.selectors.useIsEmptyFeed()
  const totalPages = model.selectors.useTotalPages()

  useEffect(() => {
    model.getFavoritedArticlesByUserFx({ pageSize, page, favorited })
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
