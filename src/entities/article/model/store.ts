import { combine, createStore, Effect, split } from 'effector'
import { status } from 'patronum/status'

import {
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} from '@/entities/article'
import * as types from '@/shared/interfaces'

import { favoriteArticleToggled } from './events'

export type Feed = {
  articles: readonly types.IArticle[]
  articlesCount: number
}

type Options = {
  effect: Effect<any, Feed, any>
}

export const createFeed = ({ effect }: Options) => {
  const favoriteClicked = favoriteArticleToggled.filter({
    fn: (payload) => payload.favorited,
  })
  const unfavoriteClicked = favoriteArticleToggled.filter({
    fn: (payload) => !payload.favorited,
  })
  const $feed = createStore<Feed>({
    articles: [],
    articlesCount: 0,
  })
    .on(effect.doneData, (_, payload) => payload)
    .on(favoriteClicked, (state, payload) => ({
      ...state,
      articles: state.articles.map((article) =>
        article.slug !== payload.slug
          ? article
          : {
              ...article,
              favorited: !article.favorited,
              favoritesCount: article.favoritesCount + 1,
            },
      ),
    }))
    .on(
      [setFavoriteArticleFx.done, setUnfavoriteArticleFx.done],
      (state, { params, result }) => ({
        ...state,
        articles: state.articles.map((article) =>
          article.slug !== params.slug
            ? article
            : {
                ...article,
                favorited: result.article.favorited,
                favoritesCount: result.article.favoritesCount,
              },
        ),
      }),
    )
    .on(
      [setFavoriteArticleFx.fail, setUnfavoriteArticleFx.fail],
      (state, { params }) => ({
        ...state,
        articles: state.articles.map((article) =>
          article.slug !== params.slug
            ? article
            : {
                ...article,
                favorited: params.favorited,
                favoritesCount: params.favoritesCount,
              },
        ),
      }),
    )

  const $totalPages = $feed.map((feed) => feed.articlesCount)
  const $articles = $feed.map((articles) => articles.articles)
  const $status = status({
    effect,
  })

  const $isEmptyFeed = combine(
    $status,
    $articles,
    (value, articles) =>
      (value === 'done' || value === 'fail') && articles.length === 0,
  )

  split({
    source: favoriteArticleToggled,
    match: {
      favorite: (article) => article.favorited,
      unfavorite: (article) => !article.favorited,
    },
    cases: {
      favorite: setUnfavoriteArticleFx,
      unfavorite: setFavoriteArticleFx,
    },
  })

  return {
    favoriteArticleToggled,
    setUnfavoriteArticleFx,
    $feed,
    $totalPages,
    $articles,
    $isEmptyFeed,
  }
}
