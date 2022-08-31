import { createEffect } from 'effector'

import { articleService } from '@/app/services/article/article.service'
import {
  SelectedArticle,
  ToggleFavoriteArticleResponse,
} from '@/shared/interfaces'

export const getArticlesFx = createEffect(articleService.getRecentArticles)
export const getFeedArticlesFx = createEffect(
  articleService.getArticlesFromUsers,
)

export const setFavoriteArticleFx = createEffect<
  SelectedArticle,
  ToggleFavoriteArticleResponse
>(articleService.setFavoriteArticle)

export const setUnfavoriteArticleFx = createEffect(
  articleService.setUnfavoriteArticle,
)
