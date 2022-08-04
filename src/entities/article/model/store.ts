import { restore, sample } from 'effector'

import { getArticlesFx } from './effect'
import { createFormSubmitted } from './events'

export const $articlesWithCount = restore(getArticlesFx, null)

export const isIdle = getArticlesFx.pending.map((pending) => !pending)

export const isPending = getArticlesFx.pending.map((pending) => pending)

export const $articles = $articlesWithCount.map(
  (article) => article?.articles ?? [],
)

sample({
  clock: createFormSubmitted,
  filter: isIdle,
  source: $articlesWithCount,
  target: getArticlesFx,
})
