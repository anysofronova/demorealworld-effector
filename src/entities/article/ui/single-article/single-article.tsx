import { useStoreMap } from 'effector-react'

import { $articles } from '@/entities/article'

import { ArticleContent } from '../article-content'
import { ArticleFooter } from '../article-footer'
import { ArticleHeader } from '../article-header'

type Props = { index: number }

export const SingleArticle = ({ index }: Props) => {
  const article = useStoreMap($articles, (articles) => articles[index])

  return (
    <div className="px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <ArticleHeader
        createdAt={article.createdAt}
        favoritesCount={article.favoritesCount}
      />
      <ArticleContent description={article.description} title={article.title} />
      <ArticleFooter
        username={article.author.username}
        image={article.author.image}
      />
    </div>
  )
}
