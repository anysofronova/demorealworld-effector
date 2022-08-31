import { Link } from 'react-router-dom'

import { IArticle, SelectedArticle } from '@/shared/interfaces'

import { ArticleContent } from '../article-content'
import { ArticleFooter } from '../article-footer'
import { ArticleHeader } from '../article-header'

type Props = Omit<IArticle, 'body' | 'updatedAt'> &
  Readonly<{
    onFavoriteToggle: (payload: SelectedArticle) => void
  }>

export const SingleArticle = ({
  author,
  createdAt,
  slug,
  title,
  description,
  tagList,
  favorited,
  favoritesCount,
  onFavoriteToggle,
}: Props) => {
  return (
    <div className="px-8 my-4 py-3 bg-white rounded-lg shadow-md">
      <ArticleHeader
        slug={slug}
        favorited={favorited}
        createdAt={createdAt}
        favoritesCount={favoritesCount}
        tagList={tagList}
        onClick={onFavoriteToggle}
      />
      <Link to={`/article/${slug}`}>
        <ArticleContent description={description} title={title} />
      </Link>
      <ArticleFooter
        username={author.username}
        image={author.image}
        slug={slug}
      />
    </div>
  )
}
