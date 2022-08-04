import { AiTwotoneHeart } from 'react-icons/all'

type Props = Readonly<{
  createdAt: Date
  favoritesCount: number
}>

export const ArticleHeader = ({ createdAt, favoritesCount }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <span className="font-light text-gray-600">
        <p>{new Date(createdAt).toDateString()}</p>
      </span>
      <button className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <AiTwotoneHeart className="mr-2" /> {favoritesCount}
      </button>
    </div>
  )
}
