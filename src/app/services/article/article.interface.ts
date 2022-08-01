export interface IAuthor {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface IArticle {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: Date
  updatedAt: Date
  favorited: boolean
  favoritesCount: number
  author: IAuthor
}

export interface IArticleResponse {
  articles: IArticle[]
  articlesCount: number
}
