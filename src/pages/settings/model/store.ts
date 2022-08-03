import { restore } from 'effector'

import { getProfileInfoFx } from '@/pages/settings/model/effects'

export const $profileInfo = restore(getProfileInfoFx, null)

getProfileInfoFx.doneData.watch(console.log)
