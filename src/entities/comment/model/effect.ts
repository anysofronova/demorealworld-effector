import { createEffect } from 'effector'
import { commentService } from '@/app/services/comment/comment.service'

export const getCommentsBySlugFx = createEffect(
  commentService.getCommentsBySlug,
)
export const deleteCommentByIdFx = createEffect(
  commentService.deleteCommentById,
)
