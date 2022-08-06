import { AiTwotoneHeart } from 'react-icons/all'

type Props = Readonly<{
  createdAt: Date
  favoritesCount: number
  tagList: string[]
}>

export const ArticleHeader = ({
  createdAt,
  favoritesCount,
  tagList,
}: Props) => {
  return (
    <div className="flex justify-between items-center gap-1">
      <span className="font-light text-gray-600">
        <p>{new Date(createdAt).toDateString()}</p>
      </span>
      <div className="flex gap-0.5 justify-end flex-1">
        {tagList.map((i) => (
          <div
            key={i}
            className="px-1 py-0.5 text-gray-400 border border-gray-400 rounded-xl w-fit text-sm font-light cursor-pointer"
          >
            {i}
          </div>
        ))}
      </div>
      <button className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
        <AiTwotoneHeart className="mr-0.5" /> {favoritesCount}
      </button>
    </div>
  )
}
