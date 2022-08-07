import { createEffect } from 'effector'
import { profileService } from '@/app'

export const getProfileByUsernameFx = createEffect(
  profileService.getProfileByUsername,
)
