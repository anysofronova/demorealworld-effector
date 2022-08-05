import { Link } from 'react-router-dom'

type Props = {
  createdAt: Date
  username: string
  image: string
}

export const CommentHeader = ({ createdAt, username, image }: Props) => {
  return (
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
  )
}
