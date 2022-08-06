import { createEffect } from 'effector'
import { articleService } from '@/app/services/article/article.service'

export const getArticlesFx = createEffect(articleService.getRecentArticles)
