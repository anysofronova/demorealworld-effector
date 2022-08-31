import { useTitle } from 'react-use'

import { Banner } from './ui/banner'
import { Sidebar } from './ui/sidebar'
import { Tabs } from './ui/tabs'

export const HomePage = () => {
  useTitle('Home — Conduit')

  return (
    <div>
      <Banner />
      <div className="container max-w-[1440px] mx-auto px-3 py-2">
        <div className="flex flex-col sm:grid sm:grid-cols-12 sm:grid-flow-col-dense sm:order-1 gap-4">
          <div className="sm:col-span-9 order-2">
            <Tabs />
          </div>
          <div className="sm:col-span-3 sm:mt-6 sm:order-2 order-1 px-2 flex flex-col gap-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
