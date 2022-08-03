import { restore } from 'effector'
import { pending } from 'patronum/pending'

import { getProfileInfoFx } from '@/pages/settings/model/effects'

export const $profileInfo = restore(getProfileInfoFx, null)
export const $profileProcessing = pending({ effects: [getProfileInfoFx] })

getProfileInfoFx.doneData.watch(console.log)
