import { request } from '@/shared/http'
import { ArticleFormFields } from '@/pages/editor/ui/article-form/article-form.types'
import {
  IArticle,
  IArticleResponse,
  UpdateArticleResponse,
} from '@/shared/interfaces'
import { axiosClassic } from '@/shared/http'

class ArticleService {
  async createArticle(data: ArticleFormFields) {
    return await request<IArticle>({
      url: `/api/articles`,
      method: 'post',
      data: { article: data },
    })
  }
  async updateArticle(data: UpdateArticleResponse) {
    return await request<IArticle>({
      url: `/api/articles`,
      method: 'put',
      data,
    })
  }
  async getArticleBySlug(slug: string) {
    return await request<IArticle>({
      url: `/api/articles/${slug}`,
      method: 'get',
    })
  }
  async deleteArticleBySlug(slug: string) {
    return await request<IArticle>({
      url: `/api/articles/${slug}`,
      method: 'delete',
    })
  }
  async getArticlesFromUsers() {
    return await request<IArticleResponse>({
      url: `/api/articles/feed`,
      method: 'get',
    })
  }
  async getRecentArticles() {
    return await request<IArticleResponse>({
      url: `/api/articles`,
      method: 'get',
    })
  }
}

export const articleService = new ArticleService()
