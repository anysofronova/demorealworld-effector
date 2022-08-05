import { useTitle } from 'react-use'
import { useParams } from 'react-router'
import { useStore } from 'effector-react'
import { $singleArticle, isPending } from '@/pages/article/model/store'
import { getArticleBySlugFx } from './model'
import { useEffect } from 'react'
import { ArticleBanner } from '@/pages/article/ui/article-banner'
import { ArticleContent } from '@/pages/article/ui/article-content'
import { ArticleMeta } from '@/pages/article/ui/article-meta/article-meta'
import { ArticleCommentForm } from '@/pages/article/ui/article-comment-form/article-comment-form'

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
              <ArticleCommentForm />
            </div>
          )}
    </div>
  )
}
