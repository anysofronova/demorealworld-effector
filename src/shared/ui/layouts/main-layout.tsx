import { Outlet } from 'react-router-dom'

import { Header } from '@/shared/ui/header'

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
