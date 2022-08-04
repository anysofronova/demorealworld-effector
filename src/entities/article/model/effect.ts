import { createEffect } from 'effector'

import { articleService } from '@/app'

export const getArticlesFx = createEffect(articleService.getRecentArticles)
