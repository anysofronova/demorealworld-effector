import { useGate, useList, useUnit } from 'effector-react'
import { useEffect } from 'react'

import * as home from '@/pages/home/model'
import { tagSelected } from '@/pages/home/model/events'
import { TagsSkeleton } from '@/shared/ui/atoms/tags-skeleton'

export const Sidebar = () => {
  useGate(home.Gate)
  const tagsList = useList(home.$tags, {
    getKey: (tag) => tag,
    fn: (tag) => {
      const handleClick = () => {
        tagSelected(tag)
      }
      return (
        <button
          type="button"
          className="px-1 py-0.5 text-gray-400 border border-gray-400 rounded-xl w-fit text-sm font-light cursor-pointer"
          onClick={handleClick}
        >
          {tag.toLowerCase()}
        </button>
      )
    },
  })

  const isLoading = useUnit(home.isPending)

  useEffect(() => {
    home.getAllTagsFx()
  }, [])

  return (
    <div>
      {isLoading ? (
        <TagsSkeleton />
      ) : (
        <div>
          <p className="py-2 font-light text-lg">Popular Tags</p>
          <div className="flex flex-wrap gap-0.5">{tagsList}</div>
        </div>
      )}
    </div>
  )
}
