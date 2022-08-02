import { AiOutlineEdit, IoSettingsOutline } from 'react-icons/all'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { IUser } from '@/shared/interfaces/user.interface'

type UserSettingsProps = {
  user: IUser | null
}

export const UserSettings = ({ user }: UserSettingsProps) => {
  return (
    <div className="flex items-center w-full justify-between w-2/3">
      <Link
        to={routes.HOME}
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Home
      </Link>
      <Link
        to={routes.EDITOR_PAGE}
        className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center ml-3"
      >
        <AiOutlineEdit className="mr-2 ml-1" />
        New article
      </Link>
      <Link
        to={routes.SETTINGS}
        className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center ml-3"
      >
        <IoSettingsOutline className="mr-2" />
        Settings
      </Link>
      <Link
        to={`/${user?.username}`}
        className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center ml-3"
      >
        {user?.username}
      </Link>
    </div>
  )
}
