import { AiTwotoneHeart } from 'react-icons/all'

import { SelectedArticle } from '@/shared/interfaces'
import { routes } from '@/app/routing/routes'
import { tagSelected } from '@/pages/home/model/events'
import { Link, useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { useAuth } from '@/shared/hooks'

type Props = Readonly<{
  createdAt: Date
  favorited: boolean
  slug: string
  favoritesCount: number
  tagList: readonly string[]
  onClick: (payload: SelectedArticle) => void
}>

export const ArticleHeader = ({
  createdAt,
  favoritesCount,
  tagList,
  slug,
  favorited,
  onClick,
}: Props) => {
  const navigate = useNavigate()
  const isAuth = useAuth()
  const handleClick = () => {
    isAuth.user
      ? onClick({ slug, favorited, favoritesCount })
      : navigate(routes.LOGIN)
  }
  const tagHandleClick = (i: string) => {
    tagSelected(i)
  }
  return (
    <div className="flex justify-between items-center gap-1">
      <span className="font-light text-gray-600">
        <p>{new Date(createdAt).toDateString()}</p>
      </span>
      <div className="flex gap-0.5 justify-end flex-1">
        {tagList.map((i) => (
          <Link
            to={`${routes.FEED_BY_TAG}?tag=${i}`}
            type="button"
            onClick={() => tagHandleClick(i)}
            key={i}
            className="px-1 py-0.5 text-gray-400 border border-gray-400 rounded-xl w-fit text-sm font-light cursor-pointer"
          >
            {i}
          </Link>
        ))}
      </div>
      <button
        className={classnames(
          'flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded',
          favorited ? 'bg-blue-500 text-white' : '',
        )}
        onClick={handleClick}
      >
        <AiTwotoneHeart className="mr-0.5" /> {favoritesCount}
      </button>
    </div>
  )
}
