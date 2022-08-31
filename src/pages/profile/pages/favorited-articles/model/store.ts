import { createEffect } from 'effector'
import { useUnit } from 'effector-react'

import * as article from '@/entities/article'
import { history } from '@/shared/lib'

import * as api from './api'

export const getFavoritedArticlesByUserFx = createEffect(
  api.getFavoritedArticlesByUser,
)

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
  effect: getFavoritedArticlesByUserFx,
})

export const selectors = {
  useGetFeedLoading: () => useUnit(getFavoritedArticlesByUserFx.pending),
  useIsEmptyFeed: () => useUnit($isEmptyFeed),
  useTotalPages: () => useUnit($totalPages),
}
