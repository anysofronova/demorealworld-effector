import { restore } from 'effector'

import { getAllArticlesFx } from '@/app/model/effect'
import { IArticle } from '@/app/services/article/article.interface'

type ArticleStore = {
  articles: IArticle[]
  articlesCount: number
}

export const $articles = restore<ArticleStore>(getAllArticlesFx.doneData, null)

$articles.watch(console.log)
