import { useTitle } from 'react-use'

import { Banner } from '@/pages/home/ui/banner'
import { Tabs } from '@/pages/home/ui/tabs'

export const HomePage = () => {
  useTitle('Home — Conduit')

  return (
    <div>
      <Banner />
      <div className="container max-w-[1440px] mx-auto">
        <div className="grid grid-rows-12 grid-flow-col-dense gap-4">
          <div className="row-span-9">
            <Tabs />
          </div>
          <div className="row-span-3 mt-6">
            <p>tabs component</p>
          </div>
        </div>
      </div>
    </div>
  )
}
