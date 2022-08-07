import { createEffect } from 'effector'

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
