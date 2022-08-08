import { ArticleFormFields } from '@/pages/editor/ui/article-form/article-form.types'
import { request } from '@/shared/api/http'
import {
  IArticleResponse,
  IArticleSingleResponse,
  SelectedArticle,
  ToggleFavoriteArticleResponse,
} from '@/shared/interfaces'

type ArticlesParams = {
  limit: number
  offset: number
  tag: string
}

class ArticleService {
  async createArticle(data: ArticleFormFields) {
    return await request<IArticleSingleResponse>({
      url: `/api/articles`,
      method: 'post',
      data: { article: data },
    })
  }
  async updateArticle(data: ArticleFormFields, slug: string) {
    return await request<IArticleSingleResponse>({
      url: `/api/articles/${slug}`,
      method: 'put',
      data: { article: data },
    })
  }
  async getArticleBySlug(slug: string) {
    const response = await request<IArticleSingleResponse>({
      url: `/api/articles/${slug}`,
      method: 'get',
    })
    return response.article
  }
  async deleteArticleBySlug(slug: string) {
    return await request({
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
  async getRecentArticles(params?: ArticlesParams) {
    return await request<IArticleResponse>(
      {
        url: `/api/articles`,
        method: 'get',
      },
      params,
    )
  }
  async setFavoriteArticle({ slug }: SelectedArticle) {
    return request<ToggleFavoriteArticleResponse>({
      url: `/api/articles/${slug}/favorite`,
      method: 'post',
    })
  }

  setUnfavoriteArticle = ({ slug }: SelectedArticle) => {
    return request<ToggleFavoriteArticleResponse>({
      url: `/api/articles/${slug}/favorite`,
      method: 'delete',
    })
  }
}

export const articleService = new ArticleService()
