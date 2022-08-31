import { createEffect } from 'effector'
import { useUnit } from 'effector-react'

import * as article from '@/entities/article'
import { history } from '@/shared/lib'

import * as api from './api'

export const getArticlesByUserFx = createEffect(api.getArticlesByUser)

export const setPageQueryFx = createEffect(
  ({ pathname, page }: { pathname: any; page: string }) => {
    history.push({
      pathname,
      search: page ? `?page=${Number(page) - 1}` : '',
    })
  },
)

export const {
  favoriteArticleToggled,
  $feed,
  $isEmptyFeed,
  $articles,
  $totalPages,
} = article.createFeed({
  effect: getArticlesByUserFx,
})

export const selectors = {
  useGetFeedLoading: () => useUnit(getArticlesByUserFx.pending),
  useIsEmptyFeed: () => useUnit($isEmptyFeed),
  useTotalPages: () => useUnit($totalPages),
}
