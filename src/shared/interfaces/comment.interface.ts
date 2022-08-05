import { IAuthor } from '@/shared/interfaces'

export interface IComment {
  author: IAuthor
  body: string
  createdAt: Date
  id: number
  updatedAt: Date
}

export interface ICommentResponse {
  comments: IComment[]
}
