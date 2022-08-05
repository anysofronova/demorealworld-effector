import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useTitle } from 'react-use'

import { $singleArticle, isPending } from '@/pages/article/model/store'
import { ArticleBanner } from '@/pages/article/ui/article-banner'
import { ArticleComments } from '@/pages/article/ui/article-comments'
import { ArticleContent } from '@/pages/article/ui/article-content'
import { ArticleMeta } from '@/pages/article/ui/article-meta'

import { getArticleBySlugFx } from './model'

export const ArticlePage = () => {
  const { slug } = useParams()
  useEffect(() => {
    getArticleBySlugFx(slug || '')
  }, [])
  const article = useStore($singleArticle)
  const isLoading = useStore(isPending)
  useTitle(article?.title || 'Article — Conduit')
  return (
    <div>
      {isLoading
        ? 'Loading'
        : article && (
            <div className="flex flex-col gap-4">
              <ArticleBanner {...article} />
              <ArticleContent {...article} />
              <div className="flex justify-center">
                <ArticleMeta {...article} />
              </div>
              <ArticleComments slug={article.slug} />
            </div>
          )}
    </div>
  )
}
