import { BsTrash } from 'react-icons/all'
import { Link } from 'react-router-dom'

import * as model from '@/entities/comment'

type Props = {
  createdAt: Date
  username: string
  image: string
  slug: string
  id: number
}

export const CommentHeader = ({
  createdAt,
  username,
  image,
  slug,
  id,
}: Props) => {
  const handleDeleteComment = () => {
    model.deleteCommentFx({ slug, id: String(id) })
  }

  return (
    <div className="flex gap-4 w-full relative">
      <div className="flex gap-4 w-full relative">
        <Link to={`/${username}`} className="flex items-center">
          <img
            src={image}
            className="relative rounded-lg -top-8 -mb-4 bg-white border h-16 w-16 object-cover"
            alt="Profile"
          />
        </Link>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <Link to={`/${username}`} className="flex items-center">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                {username}
              </p>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            {new Date(createdAt).toDateString()}
          </p>
        </div>
      </div>
      <button className="cursor-pointer" onClick={handleDeleteComment}>
        <BsTrash />
      </button>
    </div>
  )
}
