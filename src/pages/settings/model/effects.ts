import { createEffect } from 'effector'

import { userService } from '@/app/services/user'

export const getProfileInfoFx = createEffect(userService.getUserProfile)
