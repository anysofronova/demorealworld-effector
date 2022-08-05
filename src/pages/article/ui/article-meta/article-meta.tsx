import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlinePlus } from 'react-icons/all'
import { IAuthor } from '@/shared/interfaces'

type Props = {
  author: IAuthor
  createdAt: Date
  favoritesCount: number
}
export const ArticleMeta = ({ author, createdAt, favoritesCount }: Props) => {
  return (
    <div className="flex">
      <div className="flex gap-5">
        <div className="flex gap-2">
          <Link to={`/${author.username}`} className="flex items-center">
            <img
              className="w-10 h-10 object-cover rounded-full hidden sm:block"
              src={author.image}
              alt="avatar"
            />
          </Link>
          <div className="flex flex-col">
            <Link to={`/${author.username}`}>
              <h1 className="font-normal text-sm ">{author.username}</h1>
            </Link>
            <p className="text-sm text-gray-400 font-light">
              {new Date(createdAt).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="h-2/3 border border-gray-300 rounded-sm text-sm font-light p-1 flex justify-center items-center gap-2  hover:border-indigo-600 transition-all">
            <AiOutlinePlus /> Follow {author.username}
          </button>
          <button className="h-2/3 border border-indigo-600 rounded-sm text-sm font-light p-1 flex justify-center items-center gap-2 hover:bg-white hover:text-black transition-all">
            <AiFillHeart className="text-indigo-600" /> Favorite Article (
            {favoritesCount})
          </button>
        </div>
      </div>
    </div>
  )
}
