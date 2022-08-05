import { IArticle } from '@/shared/interfaces'
import { ArticleMeta } from '@/pages/article/ui/article-meta/article-meta'

export const ArticleBanner = ({
  title,
  author,
  createdAt,
  favoritesCount,
}: IArticle) => {
  return (
    <div className="relative inset-x-0 flex justify-center items-center w-full bg-gray-600 text-white p-8 gap-2 shadow-inner">
      <div className="flex flex-col max-w-[1000px] w-full gap-8">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <ArticleMeta
          author={author}
          createdAt={createdAt}
          favoritesCount={favoritesCount}
        />
      </div>
    </div>
  )
}
