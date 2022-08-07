import { useStoreMap } from 'effector-react'
import { Link } from 'react-router-dom'

import { $articles } from '@/entities/article'

import { ArticleContent } from '../article-content'
import { ArticleFooter } from '../article-footer'
import { ArticleHeader } from '../article-header'

type Props = { index: number }

export const SingleArticle = ({ index }: Props) => {
  const article = useStoreMap($articles, (articles) => articles[index])

  return (
    <div className="px-8 my-4 py-3 bg-white rounded-lg shadow-md">
      <ArticleHeader
        createdAt={article.createdAt}
        favoritesCount={article.favoritesCount}
        tagList={article.tagList}
      />
      <Link to={`/article/${article.slug}`}>
        <ArticleContent
          description={article.description}
          title={article.title}
        />
      </Link>
      <ArticleFooter
        username={article.author.username}
        image={article.author.image}
        slug={article.slug}
      />
    </div>
  )
}
