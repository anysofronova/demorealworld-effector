export type IAuthor = {
  username: string
  bio: null | string
  image: string
  following: boolean
}

export type IArticle = Readonly<{
  title: string
  slug: string
  body: string
  createdAt: Date
  updatedAt: Date
  tagList: readonly string[]
  description: string
  author: IAuthor
  favorited: boolean
  favoritesCount: number
}>

export interface IArticleResponse {
  articles: IArticle[]
  articlesCount: number
}

export interface IArticleSingleResponse {
  article: IArticle
}

export interface ICreateArticle {
  title: string
  description: string
  body: string
  tagList?: string[]
}

export type TUpdateArticle = Omit<ICreateArticle, 'tagList'>
export type UpdateArticleResponse = { article: TUpdateArticle }

export type FeedType = Readonly<{
  articles: readonly IArticle[]
  articlesCount: number
}>

export type SelectedArticle = Pick<
  IArticle,
  'slug' | 'favorited' | 'favoritesCount'
>

export type ToggleFavoriteArticleResponse = {
  article: IArticle
}
