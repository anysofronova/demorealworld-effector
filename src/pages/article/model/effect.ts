import { createEffect } from 'effector'
import { articleService } from '@/app'

export const getArticleBySlugFx = createEffect(articleService.getArticleBySlug)
