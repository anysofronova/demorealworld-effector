import { Link } from 'react-router-dom'

type Props = {
  createdAt: Date
  username: string
  image: string
}

export const CommentFooter = ({ createdAt, username, image }: Props) => {
  return (
    <div>
      <Link to={`/${username}`} className="flex items-center">
        <img
          className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          src={image}
          alt="avatar"
        />
        <h1 className="text-gray-700 font-bold">{username}</h1>
      </Link>
      <span className="font-light text-gray-600">
        <p>{new Date(createdAt).toDateString()}</p>
      </span>
    </div>
  )
}
