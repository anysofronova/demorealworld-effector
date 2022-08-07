import { Link } from 'react-router-dom'

type Props = Readonly<{
  image: string
  username: string
  slug: string
}>

export const ArticleFooter = ({ username, image, slug }: Props) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <Link to={`/article/${slug}`} className="text-blue-600 hover:underline">
        Read more
      </Link>
      <div>
        <Link to={`/${username}`} className="flex items-center">
          <img
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            src={image}
            alt="avatar"
          />
          <h1 className="text-gray-700 font-bold">{username}</h1>
        </Link>
      </div>
    </div>
  )
}
