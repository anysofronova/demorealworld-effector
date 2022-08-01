import { createEffect } from 'effector'

import ArticleService from '@/app/services/article/article.service'

export const getAllArticlesFx = createEffect(ArticleService.getAllArticles)
