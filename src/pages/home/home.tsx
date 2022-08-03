import { useTitle } from 'react-use'
import { Banner } from '@/pages/home/ui/banner'

export const HomePage = () => {
  useTitle('Home — Conduit')

  return (
    <div>
      <Banner />
    </div>
  )
}
