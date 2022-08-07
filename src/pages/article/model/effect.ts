import { createEffect } from 'effector'

import { articleService } from '@/app/services/article/article.service'

export const getArticleBySlugFx = createEffect(articleService.getArticleBySlug)
export const deleteArticleFx = createEffect(articleService.deleteArticleBySlug)
