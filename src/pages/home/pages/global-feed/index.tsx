import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'

import { routes } from '@/app/routing/routes'
import { Feed } from '@/entities/article/ui/feed'
import { useAuth } from '@/shared/hooks'
import { Pagination } from '@/shared/ui/pagination'

import * as model from './model'

type Props = Readonly<{
  pageSize?: number
}>

const GlobalFeedPage = ({ pageSize = 10 }: Props) => {
  const isAuth = useAuth()
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1))
  const loading = useUnit(model.getFeedFx.pending)
  const isEmpty = useUnit(model.$isEmptyFeed)
  const totalPages = useUnit(model.$totalPages)

  useEffect(() => {
    model.getFeedFx({ pageSize, page })
  }, [page, pageSize])

  const navigate = useNavigate()
  const handlePageChange = (x: number) => {
    setPage(x)
  }

  const redirectToLogin = () => {
    navigate(routes.LOGIN)
  }
  return (
    <>
      {isAuth ? null : redirectToLogin()}
      <Feed
        articlesStore={model.$articles}
        isEmpty={isEmpty}
        loading={loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={page}
        pageSize={pageSize}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default GlobalFeedPage
