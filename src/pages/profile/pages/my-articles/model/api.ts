import * as http from '@/shared/api/http'
import { FeedType } from '@/shared/interfaces'
import { limit } from '@/shared/lib'

export type getArticlesByUserFxArgs = Readonly<{
  pageSize: number
  page: number
  author: string
}>

export const getArticlesByUser = ({
  pageSize,
  page,
  author,
  favorited,
}: getArticlesByUserFxArgs) => {
  const pageIndex = page - 1
  return http.request<FeedType>({
    url: `/api/articles?author=${author}&${limit(pageSize, pageIndex)}`,
    method: 'get',
  })
}
