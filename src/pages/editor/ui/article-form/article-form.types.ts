export type ArticleFormFields = {
  title: string
  description: string
  body: string
  tagList: string | string[]
}

export type ArticleData = keyof ArticleFormFields
