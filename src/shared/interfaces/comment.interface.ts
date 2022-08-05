import { IAuthor } from '@/shared/interfaces'

export type IComment = Readonly<{
  author: IAuthor
  body: string
  id: number
  createdAt: Date
  updatedAt: Date
}>

export interface ICommentsResponse {
  comments: IComment[]
}

export type AddCommentArgs = Readonly<{
  slug: string
  body: string
}>

export type DeleteCommentArgs = Readonly<{
  slug: string
  id: string
}>
