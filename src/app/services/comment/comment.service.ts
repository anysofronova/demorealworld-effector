import { request } from '@/shared/http'
import * as types from '@/shared/interfaces'

class CommentService {
  async addComment({ slug, body }: types.AddCommentArgs) {
    return await request<types.IComment>({
      url: `/api/articles/${slug}/comments`,
      method: 'post',
      data: { comment: { body } },
    })
  }
  async getCommentsBySlug(slug: string) {
    return await request<types.ICommentsResponse>({
      url: `/api/articles/${slug}/comments`,
      method: 'get',
    })
  }
  async deleteComment({ slug, id }: types.DeleteCommentArgs) {
    return await request({
      url: `/api/articles/${slug}/comments/${id}`,
      method: 'delete',
    })
  }
}

export const commentService = new CommentService()
