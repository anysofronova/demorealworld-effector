import {
  AiFillHeart,
  AiOutlineEdit,
  AiOutlinePlus,
  BsTrash,
} from 'react-icons/all'
import { Link, useNavigate } from 'react-router-dom'

import { IAuthor } from '@/shared/interfaces'
import { useAuth } from '@/shared/hooks/useAuth'
import { deleteArticleFx } from '@/pages/article/model'
import { routes } from '@/app/routing/routes'

type Props = {
  author: IAuthor
  createdAt: Date
  favoritesCount: number
  slug: string
}
export const ArticleMeta = ({
  author,
  createdAt,
  favoritesCount,
  slug,
}: Props) => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const handleDeleteArticle = async () => {
    deleteArticleFx(slug)
    navigate(routes.HOME_PAGE)
  }
  return (
    <div className="flex w-full sm:container sm:px-8 px-8">
      <div className="flex gap-5 sm:justify-center justify-between w-full">
        <div className="flex flex-col sm:flex-row gap-2">
          <Link to={`/${author.username}`} className="flex items-center">
            <img
              className="w-14 h-14 sm:w-10 sm:h-10 object-cover rounded-full sm:block"
              src={author.image}
              alt="avatar"
            />
          </Link>
          <div className="flex flex-col f-w">
            <Link to={`/${author.username}`}>
              <h1 className="font-normal text-sm ">{author.username}</h1>
            </Link>
            <p className="text-sm text-gray-400 font-light">
              {new Date(createdAt).toDateString()}
            </p>
          </div>
        </div>
        {user?.username === author.username ? (
          <div className="flex justify-center items-center gap-2 sm:flex-row flex-col">
            <Link
              to={`/editor/${slug}`}
              className="sm:h-2/3 sm:w-fit w-full border border-gray-300 rounded-sm text-sm font-light p-1 flex justify-center items-center gap-2  hover:border-indigo-600 transition-all"
            >
              <AiOutlineEdit /> Edit Article
            </Link>
            <button
              onClick={() => handleDeleteArticle()}
              className="sm:h-2/3 sm:w-fit w-full border border-indigo-600 rounded-sm text-sm font-light p-1 flex justify-center items-center gap-2 hover:bg-white hover:text-black transition-all"
            >
              <BsTrash className="text-indigo-600" /> Delete Article (
              {favoritesCount})
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2 sm:flex-row flex-col">
            <button className="sm:h-2/3 sm:w-fit w-full border border-gray-300 rounded-sm text-sm font-light p-1 flex justify-center items-center gap-2  hover:border-indigo-600 transition-all">
              <AiOutlinePlus /> Follow {author.username}
            </button>
            <button className="sm:h-2/3 sm:w-fit w-full border border-indigo-600 rounded-sm text-sm font-light p-1 flex justify-center items-center gap-2 hover:bg-white hover:text-black transition-all">
              <AiFillHeart className="text-indigo-600" /> Favorite Article (
              {favoritesCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
