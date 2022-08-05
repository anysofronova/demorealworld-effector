import { createEffect } from 'effector'

import { commentService } from '@/app/services/comment/comment.service'
import * as types from '@/shared/interfaces'

export const addCommentFx = createEffect<
  types.AddCommentArgs,
  types.IComment,
  Record<string, unknown>
>(commentService.addComment)

export const getCommentsFx = createEffect(commentService.getCommentsBySlug)

export const deleteCommentFx = createEffect<
  types.DeleteCommentArgs,
  void,
  Record<string, unknown>
>(commentService.deleteComment)
