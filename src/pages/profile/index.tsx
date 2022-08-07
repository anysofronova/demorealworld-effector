import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useTitle } from 'react-use'

import {
  $profile,
  getProfileByUsernameFx,
  isPending,
} from '@/pages/profile/model'
import { ProfileBanner } from '@/pages/profile/ui/profile-banner'
import { ProfileTabs } from '@/pages/profile/ui/profile-tabs'
import { Skeleton } from '@/shared/ui/atoms/skeleton/skeleton'

//todo доделатьь 404
export const ProfilePage = () => {
  useTitle('Profile — Conduit')
  const { username } = useParams()
  useEffect(() => {
    username && getProfileByUsernameFx(username)
  }, [username])
  const profile = useUnit($profile)
  const isLoading = useUnit(isPending)
  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : profile ? (
        <div>
          <ProfileBanner {...profile} />
          <ProfileTabs {...profile} />
        </div>
      ) : (
        <div>NOT FOUND</div>
      )}
    </div>
  )
}
