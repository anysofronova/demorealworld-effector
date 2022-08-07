import { Feed } from '@/entities/article/ui/feed'
import { useFeed } from '@/shared/hooks'
import { Pagination } from '@/shared/ui/pagination'

import * as model from './model'

type Props = Readonly<{
  pageSize?: number
}>

export const YourFeedPage = ({ pageSize = 10 }: Props) => {
  const feed = useFeed(pageSize)

  return (
    <>
      <Feed
        articlesStore={model.$articles}
        isEmpty={feed.isEmpty}
        loading={feed.loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={feed.page}
        pageSize={pageSize}
        total={feed.totalPages}
        onPageChange={feed.handlePageChange}
      />
    </>
  )
}
