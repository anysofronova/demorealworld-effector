import { Store } from 'effector'
import { useList } from 'effector-react'

import { SingleArticle } from '@/entities/article'
import { FeedType, SelectedArticle } from '@/shared/interfaces'

import { EmptyFeed } from '../empty-feed'
import { ArticleListSkeleton } from '@/shared/ui/atoms/article-list-skeleton/article-list-skeleton'

type Props = Readonly<{
  loading: boolean
  isEmpty: boolean
  articlesStore: Store<FeedType['articles']>
  onFavoriteToggle: (payload: SelectedArticle) => void
}>

export const Feed = ({
  loading,
  isEmpty,
  articlesStore,
  onFavoriteToggle,
}: Props) => {
  const feedArticlesList = useList(articlesStore, {
    getKey: (item) => item.slug,
    fn: (item, index) => (
      <SingleArticle
        key={index}
        author={item.author}
        createdAt={item.createdAt}
        description={item.description}
        favorited={item.favorited}
        favoritesCount={item.favoritesCount}
        slug={item.slug}
        tagList={item.tagList}
        title={item.title}
        onFavoriteToggle={onFavoriteToggle}
      />
    ),
  })
  return (
    <>
      <EmptyFeed show={isEmpty} />
      <div>{feedArticlesList}</div>
      {loading && <ArticleListSkeleton />}
    </>
  )
}
