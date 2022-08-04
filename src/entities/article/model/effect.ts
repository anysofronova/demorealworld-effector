import { createEffect } from 'effector'
import { articleService } from '@/app/services/article.services'

export const getArticlesFx = createEffect(articleService.getRecentArticles)
