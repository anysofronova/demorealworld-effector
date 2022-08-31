import { forward, restore } from 'effector'
import { createGate, useStore } from 'effector-react'

import { createQueryStore } from '@/shared'

import { getAllTagsFx } from './effect'

export const $tagsFromServer = restore(getAllTagsFx, null)
export const $tags = $tagsFromServer.map((tag) => tag?.tags || [])
export const isPending = getAllTagsFx.pending.map((pending) => pending)
export const Gate = createGate()
export const $tagQuery = createQueryStore('tag')

forward({
  from: Gate.open,
  to: getAllTagsFx,
})

export const selectors = {
  useTagQuery: () => useStore($tagQuery),
}
