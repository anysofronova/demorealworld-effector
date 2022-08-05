import { ArticleSingleSkeleton } from '@/shared/ui/atoms/article-list-skeleton/article-single-skeleton'

export const ArticleListSkeleton = () => (
  <div className="flex flex-col mt-4 w-full gap-4 ">
    <ArticleSingleSkeleton />
    <ArticleSingleSkeleton />
  </div>
)
