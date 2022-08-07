import { useTitle } from 'react-use'
import { Banner } from '@/pages/home/ui/banner'
import { Tabs } from '@/pages/home/ui/tabs'
import { useEffect } from 'react'
import { $allTags, getAllTagsFx, isPending, $tags } from './model'
import { useList, useStore } from 'effector-react'

export const HomePage = () => {
  useTitle('Home — Conduit')
  useEffect(() => {
    getAllTagsFx()
  }, [])
  const tags = useStore($allTags)
  const isLoading = useStore(isPending)
  const tagsList = useList<Readonly<string>>($tags, {
    keys: [tags],
    fn: (tag) => (
      <div
        key={tag}
        className="px-1 py-0.5 text-gray-400 border border-gray-400 rounded-xl w-fit text-sm font-light cursor-pointer"
      >
        {tag}
      </div>
    ),
  })
  return (
    <div>
      <Banner />
      <div className="container max-w-[1440px] mx-auto px-3 py-2">
        <div className="flex flex-col sm:grid sm:grid-cols-12 sm:grid-flow-col-dense sm:order-1 gap-4">
          <div className="sm:col-span-9 order-2">
            <Tabs />
          </div>
          <div className="sm:col-span-3 sm:mt-6 sm:order-2 order-1 px-2 flex flex-col gap-2">
            <p className="py-2 font-light text-lg">Popular Tags</p>
            <div className="flex flex-wrap gap-0.5">{tagsList}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
