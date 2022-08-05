import { restore, sample } from 'effector'
import { addCommentSubmitted } from '@/entities/comment/model/events'
import { getCommentsBySlugFx } from './effect'

export const $commentsWithCount = restore(getCommentsBySlugFx, null)

export const isIdle = getCommentsBySlugFx.pending.map((pending) => !pending)

export const isPending = getCommentsBySlugFx.pending.map((pending) => pending)

export const $comments = $commentsWithCount.map(
  (comment) => comment?.comments ?? [],
)

sample({
  clock: addCommentSubmitted,
  filter: isIdle,
  source: $commentsWithCount,
  target: getCommentsBySlugFx,
})
