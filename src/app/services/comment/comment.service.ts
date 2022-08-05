import { IComment, ICommentsResponse } from '@/shared/interfaces'
import { request } from '@/shared/http'
import { CommentFormFields } from '@/entities/comment/ui/comment-form'

class CommentService {
  async addComment(data: CommentFormFields, slug: string) {
    return await request<IComment>({
      url: `/api/articles/${slug}/comments`,
      method: 'post',
      data: { comment: data },
    })
  }
  async getCommentsBySlug(slug: string) {
    return await request<ICommentsResponse>({
      url: `/api/articles/${slug}/comments`,
      method: 'get',
    })
  }
  async deleteCommentById({ slug, id }: { slug: string; id: number }) {
    return await request<IComment>({
      url: `/api/articles/${slug}/comments/${id}`,
      method: 'delete',
    })
  }
}

export const commentService = new CommentService()
