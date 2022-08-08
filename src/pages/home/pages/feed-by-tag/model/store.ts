import { createEffect } from 'effector'
import { useUnit } from 'effector-react'

import * as article from '@/entities/article'

import * as api from './api'

export const getFeedFx = createEffect(api.getFeed)

export const {
  favoriteArticleToggled,
  $feed,
  $isEmptyFeed,
  $articles,
  $totalPages,
} = article.createFeed({
  effect: getFeedFx,
})

export const selectors = {
  useGetFeedLoading: (): boolean => useUnit(getFeedFx.pending),
  useIsEmptyFeed: () => useUnit($isEmptyFeed),
  useTotalPages: () => useUnit($totalPages),
}
