import { ArticleHeader } from '@/entities/article/ui/article-header/article-header'
import { ArticleContent } from '@/entities/article/ui/article-content/article-content'
import { ArticleFooter } from '@/entities/article/ui/article-footer/article-footer'

export const SingleArticle = () => {
  return (
    <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <ArticleHeader />
      <ArticleContent />
      <ArticleFooter />
    </div>
  )
}
