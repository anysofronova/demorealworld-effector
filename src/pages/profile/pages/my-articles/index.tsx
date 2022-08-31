import { useEffect } from 'react'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'

import { Feed } from '@/entities/article/ui/feed'
import { Pagination } from '@/shared/ui/pagination'

import * as model from './model'

type Props = Readonly<{
  pageSize?: number
  author: string
}>

export const MyArticles = ({ author, pageSize = 10 }: Props) => {
  const myArticles = useMyArticles(pageSize, author)
  return (
    <>
      <Feed
        articlesStore={model.$articles}
        isEmpty={myArticles.isEmpty}
        loading={myArticles.loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={myArticles.page}
        pageSize={pageSize}
        total={myArticles.totalPages}
        onPageChange={myArticles.handlePageChange}
      />
    </>
  )
}

function useMyArticles(pageSize: number, author: string) {
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1))
  const loading = model.selectors.useGetFeedLoading()
  const isEmpty = model.selectors.useIsEmptyFeed()
  const totalPages = model.selectors.useTotalPages()

  useEffect(() => {
    model.getArticlesByUserFx({ pageSize, page, author })
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
