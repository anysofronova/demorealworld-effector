import * as http from '@/shared/api/http'
import { FeedType } from '@/shared/interfaces'
import { limit } from '@/shared/lib'

export type getFavoritedArticlesByUserFxArgs = Readonly<{
  pageSize: number
  page: number
  favorited: string
}>

export const getFavoritedArticlesByUser = ({
  pageSize,
  page,
  favorited,
}: getFavoritedArticlesByUserFxArgs) => {
  const pageIndex = page - 1
  return http.request<FeedType>({
    url: `/api/articles?favorited=${favorited}&${limit(pageSize, pageIndex)}`,
    method: 'get',
  })
}
