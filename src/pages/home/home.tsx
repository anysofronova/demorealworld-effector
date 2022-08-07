import { useList, useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useTitle } from 'react-use'

import { Banner } from '@/pages/home/ui/banner'
import { Tabs } from '@/pages/home/ui/tabs'
import { TagsSkeleton } from '@/shared/ui/atoms/tags-skeleton/tags-skeleton'

import * as home from './model'
import { tagSelected } from './model/events'

export const HomePage = () => {
  useTitle('Home — Conduit')

  useEffect(() => {
    home.getAllTagsFx()
  }, [])

  const tags = useUnit(home.$tags)
  const isLoading = useUnit(home.isPending)
  const tagsList = useList<Readonly<string>>(home.$tags, {
    keys: [tags],
    fn: (tag) => {
      const handleClick = () => {
        tagSelected(tag)
      }
      return (
        <div
          key={tag}
          className="px-1 py-0.5 text-gray-400 border border-gray-400 rounded-xl w-fit text-sm font-light cursor-pointer"
          onClick={handleClick}
        >
          {tag.toLowerCase()}
        </div>
      )
    },
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
            {isLoading ? (
              <TagsSkeleton />
            ) : (
              <div>
                <p className="py-2 font-light text-lg">Popular Tags</p>
                <div className="flex flex-wrap gap-0.5">{tagsList}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
