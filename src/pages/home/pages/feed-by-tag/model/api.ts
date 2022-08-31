import * as http from '@/shared/api/http'
import { FeedType } from '@/shared/interfaces'
import { limit } from '@/shared/lib'

export type GetFeedPayload = Readonly<{
  tag: string
  page: number
  pageSize: number
}>

export const getFeed = ({ page, tag, pageSize }: GetFeedPayload) => {
  const pageIndex = page - 1

  return http.request<FeedType>({
    url: `/api/articles?tag=${encodeURIComponent(tag)}&${limit(
      pageSize,
      pageIndex,
    )}`,
    method: 'get',
  })
}
