import * as http from '@/shared/api/http'
import { FeedType } from '@/shared/interfaces'
import { limit } from '@/shared/lib'

export type getFeedFxArgs = {
  pageSize: number
  page: number
}

export const getFeed = ({ pageSize, page }: getFeedFxArgs) => {
  const pageIndex = page - 1

  return http.request<FeedType>({
    url: `/api/articles?${limit(pageSize, pageIndex)}`,
    method: 'get',
  })
}
