import { useTitle } from 'react-use'
import { Banner } from '@/pages/home/ui/banner'
import { Tabs } from '@/pages/home/ui/tabs'

export const HomePage = () => {
  useTitle('Home — Conduit')
  const isLoggedIn = Boolean(localStorage.getItem('user'))
  return (
    <div>
      <Banner />
      <Tabs isLoggedIn={isLoggedIn} />
    </div>
  )
}
