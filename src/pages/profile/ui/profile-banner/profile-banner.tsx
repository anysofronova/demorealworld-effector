import { routes } from '@/app/routing/routes'
import { Link } from 'react-router-dom'
import { IoSettingsOutline } from 'react-icons/all'
import { useAuth } from '@/shared/hooks/useAuth'

export const ProfileBanner = () => {
  const { user } = useAuth()
  return (
    <div className="flex relative inset-x-0 w-full bg-gray-200 text-white justify-center items-center shadow-inner">
      <div className="max-w-[700px] w-5/6 flex flex-col justify-center items-center p-8 gap-2">
        <div className="w-24 h-24">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://sun9-87.userapi.com/impf/rTI4cRsstPJf6RB7dVTih3c2hNDkuRDaKheFOw/AsaOb854HSY.jpg?size=2000x1333&quality=96&sign=931e9e2c7b1c1a56f19b3264fdacc6a5&type=album"
            alt="Profile"
          />
        </div>
        <h3 className="font-bold text-2xl text-black">{user?.username}</h3>
        <h5 className="text-gray-500 font-light">{user?.bio}</h5>
        <Link
          to={routes.SETTINGS_PAGE}
          className="flex justify-center items-center text-gray-500 border p-1 border-gray-500 rounded-sm self-end text-sm hover:text-black"
        >
          <IoSettingsOutline className="pr-2 text-2xl" /> Edit Profile Settings
        </Link>
      </div>
    </div>
  )
}
