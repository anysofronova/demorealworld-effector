import { AiOutlineEdit, IoSettingsOutline } from 'react-icons/all'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { IUser } from '@/shared/interfaces/user.interface'

type UserSettingsProps = {
  user: IUser | null
  disableMode: () => void
}

export const UserSettings = ({ user, disableMode }: UserSettingsProps) => {
  return (
    <div className="flex flex-col  gap-3 md:items-center w-full md:justify-between md:flex-row">
      <div className="flex self-start sm:self-center">
        <Link
          to={routes.HOME_PAGE}
          className="text-base font-medium text-gray-500 hover:text-gray-900"
          onClick={disableMode}
        >
          Home
        </Link>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <Link
          to={routes.EDITOR_PAGE}
          className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center md:ml-3"
          onClick={disableMode}
        >
          <AiOutlineEdit className="mr-2 ml-1" />
          New article
        </Link>
        <Link
          to={routes.SETTINGS_PAGE}
          className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center md:ml-3"
          onClick={disableMode}
        >
          <IoSettingsOutline className="mr-2" />
          Settings
        </Link>
        <Link
          to={`/${user?.username}`}
          className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center md:ml-1"
          onClick={disableMode}
        >
          {user?.image && (
            <img
              className="w-10 h-10 rounded-full mr-2 object-cover"
              loading="lazy"
              src={user?.image || 'https://picsum.photos/100'}
              alt="Rounded avatar"
            />
          )}
          <span className="pl-1">{user?.username}</span>
        </Link>
      </div>
    </div>
  )
}
