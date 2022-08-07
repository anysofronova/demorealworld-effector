import { useTitle } from 'react-use'

import { ProfileBanner } from '@/pages/profile/ui/profile-banner'
import { ProfileTabs } from '@/pages/profile/ui/profile-tabs'
import { useEffect } from 'react'
import { useStore } from 'effector-react'
import {
  $profile,
  getProfileByUsernameFx,
  isPending,
} from '@/pages/profile/model'
import { useParams } from 'react-router'
import ProfileSkeleton from '@/shared/ui/atoms/profile-skeleton/profile-skeleton'

//todo доделатьь 404
export const ProfilePage = () => {
  useTitle('Profile — Conduit')
  const { username } = useParams()
  useEffect(() => {
    if (username) getProfileByUsernameFx(username)
  }, [])
  const profile = useStore($profile)
  const isLoading = useStore(isPending)
  return (
    <div>
      {isLoading ? (
        <ProfileSkeleton />
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
