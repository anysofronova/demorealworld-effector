import { useTitle } from 'react-use'
import { ProfileBanner } from '@/pages/profile/ui/profile-banner/profile-banner'

export const ProfilePage = () => {
  useTitle('Profile — Conduit')

  return (
    <div>
      <ProfileBanner />
    </div>
  )
}
