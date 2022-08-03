import { request } from '@/shared/http'
import {
  CreateArticleResponse,
  IArticle,
  IArticleResponse,
  UpdateArticleResponse,
} from '@/shared/interfaces'

class ArticleService {
  async createArticle(data: CreateArticleResponse) {
    return await request<IArticle>({
      url: `/api/articles`,
      method: 'post',
      data,
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
