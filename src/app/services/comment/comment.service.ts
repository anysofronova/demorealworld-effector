import { IComment, ICommentResponse } from '@/shared/interfaces'
import { request } from '@/shared/http'

class CommentService {
  async addComment(data: ArticleFormFields, slug: string) {
    return await request<IComment>({
      url: `/api/articles/${slug}/comments`,
      method: 'post',
      data: { comment: data },
    })
  }
  async getCommentsBySlug(slug: string) {
    return await request<ICommentResponse>({
      url: `/api/articles/${slug}/comments`,
      method: 'get',
    })
  }
}

export const commentService = new CommentService()
