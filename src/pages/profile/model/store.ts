import { restore } from 'effector'

import { getProfileByUsernameFx } from './effect'

export const $profile = restore(getProfileByUsernameFx, null)
export const isPending = getProfileByUsernameFx.pending.map(
  (pending) => pending,
)
