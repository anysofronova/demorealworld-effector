import { useTitle } from 'react-use'
import { ProfileBanner } from '@/pages/profile/ui/profile-banner/profile-banner'
import ProfileTabs from '@/pages/profile/ui/profile-tabs/profile-tabs'

export const ProfilePage = () => {
  useTitle('Profile — Conduit')

  return (
    <div>
      <ProfileBanner />
      <ProfileTabs />
    </div>
  )
}
