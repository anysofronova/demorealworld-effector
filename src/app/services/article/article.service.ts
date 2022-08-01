import { IArticleResponse } from '@/app/services/article/article.interface'
import { request } from '@/shared/http'

class ArticleService {
  async getAllArticles() {
    return await request<IArticleResponse>({
      url: `/api/articles`,
      method: 'get',
    })
  }
}

export default new ArticleService()
