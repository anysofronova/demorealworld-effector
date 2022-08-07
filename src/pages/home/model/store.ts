import { restore, sample } from 'effector'

import { getAllTagsFx } from './effect'

export const $allTags = restore(getAllTagsFx, null)
export const isPending = getAllTagsFx.pending.map((pending) => pending)

export const $tags = $allTags.map((tag) => tag?.tags ?? [])
