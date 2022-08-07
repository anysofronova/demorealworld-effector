import { SyntheticEvent } from 'react'
import { AiOutlinePlus, IoSettingsOutline } from 'react-icons/all'
import { Link } from 'react-router-dom'

import { defaultImageUrl } from '@/app/config'
import { routes } from '@/app/routing/routes'
import { IProfileResponse } from '@/shared/interfaces'
import { useAuth } from '@/shared/hooks/useAuth'

export const ProfileBanner = ({ profile }: IProfileResponse) => {
  const { user } = useAuth()
  return (
    <div className="flex relative inset-x-0 w-full bg-gray-200 text-white justify-center items-center shadow-inner">
      <div className="max-w-[700px] sm:w-5/6 flex flex-col justify-center items-center p-8 gap-2">
        <div className=" flex w-[100px] h-[100px]">
          {profile.image && (
            <img
              className="w-full rounded-full object-cover"
              loading="lazy"
              src={profile.image}
              alt="Rounded avatar"
              onError={(event: SyntheticEvent<HTMLImageElement, Event>) => {
                event.currentTarget.src = defaultImageUrl
                event.currentTarget.onerror = null
              }}
            />
          )}
        </div>
        <h3 className="font-bold text-2xl text-black">{profile.username}</h3>
        <h5 className="text-gray-500 font-light">{profile.bio}</h5>
        {user?.username === profile.username ? (
          <Link
            to={routes.SETTINGS_PAGE}
            className="flex justify-center items-center text-gray-500 border p-1 border-gray-500 rounded-sm self-end text-sm hover:text-black"
          >
            <IoSettingsOutline className="pr-2 text-2xl" /> Edit Profile
            Settings
          </Link>
        ) : (
          <button className="flex justify-center items-center text-gray-500 border p-1 border-gray-500 rounded-sm self-end text-sm hover:text-black">
            <AiOutlinePlus /> Follow {profile.username}
          </button>
        )}
      </div>
    </div>
  )
}
