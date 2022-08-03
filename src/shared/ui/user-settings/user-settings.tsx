import { AiOutlineEdit, IoSettingsOutline } from 'react-icons/all'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { IUser } from '@/shared/interfaces/user.interface'

type UserSettingsProps = {
  user: IUser | null
  disableMode: () => void
}

export const UserSettings = ({ user, disableMode }: UserSettingsProps) => {
  const checkImgSrc = (src: string) => {
    const img = new Image()
    img.src = src
    return !!img.onload
  }
  return (
    <div className="flex flex-col gap-3 md:items-center w-full md:justify-between md:flex-row">
      <div className="flex self-start">
        <Link
          to={routes.HOME_PAGE}
          className="text-base font-medium text-gray-500 hover:text-gray-900"
          onClick={disableMode}
        >
          Home
        </Link>
      </div>
      <div className="flex flex-col gap-3 md:flex-row ">
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
            <div className="w-8 h-8 overflow-hidden">
              <img
                className="h-full w-full rounded-full object-cover"
                src={
                  checkImgSrc(user.image)
                    ? user.image
                    : 'https://www.pulsar-agency.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png'
                }
                alt="Profile"
              />
            </div>
          )}
          <span className="pl-1">{user?.username}</span>
        </Link>
      </div>
    </div>
  )
}
