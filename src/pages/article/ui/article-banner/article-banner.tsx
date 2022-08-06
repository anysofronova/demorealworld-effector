import { ArticleMeta } from '@/pages/article/ui/article-meta/article-meta'
import { IArticle } from '@/shared/interfaces'

export const ArticleBanner = ({
  title,
  author,
  createdAt,
  favoritesCount,
  slug,
}: IArticle) => {
  return (
    <div className="relative inset-x-0 flex justify-center items-center w-full bg-gray-600 text-white py-8 gap-2 shadow-inner">
      <div className="flex flex-col max-w-[1000px] w-full gap-8">
        <h1 className="text-4xl font-semibold px-8">{title}</h1>
        <ArticleMeta
          author={author}
          createdAt={createdAt}
          favoritesCount={favoritesCount}
          slug={slug}
        />
      </div>
    </div>
  )
}
