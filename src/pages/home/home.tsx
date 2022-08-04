import { useTitle } from 'react-use'
import { Banner } from '@/pages/home/ui/banner'
import { Tabs } from '@/pages/home/ui/tabs'
import { useAuth } from '@/shared/hooks/useAuth'

export const HomePage = () => {
  useTitle('Home — Conduit')
  const { user } = useAuth()
  const isLoggedIn = Boolean(user)
  return (
    <div>
      <Banner />
      <Tabs isLoggedIn={isLoggedIn} />
    </div>
  )
}
