import { IArticle } from '@/shared/interfaces'

export const ArticleContent = ({ body, tagList }: IArticle) => {
  return (
    <div className="sm:container border-b border-gray-200 sm:container sm:mx-auto px-8 flex flex-col gap-6 py-6 max-w-[800px]">
      <div className="font-light text-xl">{body}</div>
      <div className="flex gap-2">
        {tagList.map((i) => (
          <div
            key={i}
            className="px-1 py-0.5 text-gray-400 border border-gray-400 rounded-xl w-fit text-sm font-light"
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}
