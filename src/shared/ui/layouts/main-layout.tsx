import { Outlet } from 'react-router-dom'

import { Container } from '@/shared/ui'
import { Header } from '@/shared/ui/header'

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}
