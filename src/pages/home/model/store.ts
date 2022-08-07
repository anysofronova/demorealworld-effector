import { restore } from 'effector'

import { getAllTagsFx } from './effect'

export const $tagsFromServer = restore(getAllTagsFx, null)
export const $tags = $tagsFromServer.map((tag) => tag?.tags || [])
export const isPending = getAllTagsFx.pending.map((pending) => pending)

// forward({
//   from: Gate.open,
//   to: getAllTagsFx,
// })

// getAllTagsFx.doneData.watch(console.log)
