import { restore, sample } from 'effector'
import { createGate } from 'effector-react'

import { addCommentFx, deleteCommentFx, getCommentsFx } from './effect'
import { commentDeleted, commentFormSubmitted } from './events'

export const $commentsList = restore(getCommentsFx, null)

export const $isIdle = getCommentsFx.pending.map((pending) => !pending)

export const $comments = $commentsList.map((comment) => comment?.comments ?? [])

export const Gate = createGate<{ slug: string }>()
const $slug = Gate.state.map(({ slug }) => slug)

sample({
  source: $slug,
  clock: commentFormSubmitted,
  fn: (slug, fields) => ({ slug, ...fields }),
  target: addCommentFx,
})

sample({
  source: $slug,
  clock: commentDeleted,
  fn: (slug, id) => ({ slug, id }),
  target: deleteCommentFx,
})

sample({
  clock: [addCommentFx.done, deleteCommentFx.done],
  filter: $isIdle,
  source: $slug,
  target: getCommentsFx,
})
