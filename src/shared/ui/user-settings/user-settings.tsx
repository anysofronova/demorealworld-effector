import { AiOutlineEdit, IoSettingsOutline } from 'react-icons/all'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { IUser } from '@/shared/interfaces/user.interface'

type UserSettingsProps = {
  user: IUser | null
  setMode: (mode: boolean) => void
}

export const UserSettings = ({ user, setMode }: UserSettingsProps) => {
  return (
    <div className="flex flex-col gap-3 md:items-center w-full md:justify-between md:flex-row">
      <div className="flex self-start">
        <Link
          to={routes.HOME}
          onClick={() => setMode(false)}
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Home
        </Link>
      </div>
      <div className="flex flex-col gap-3 md:flex-row ">
        <Link
          to={routes.EDITOR_PAGE}
          onClick={() => setMode(false)}
          className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center md:ml-3"
        >
          <AiOutlineEdit className="mr-2 ml-1" />
          New article
        </Link>
        <Link
          to={routes.SETTINGS}
          onClick={() => setMode(false)}
          className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center md:ml-3"
        >
          <IoSettingsOutline className="mr-2" />
          Settings
        </Link>
        <Link
          to={`/${user?.username}`}
          onClick={() => setMode(false)}
          className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center md:ml-3"
        >
          {user?.username}
        </Link>
      </div>
    </div>
  )
}
