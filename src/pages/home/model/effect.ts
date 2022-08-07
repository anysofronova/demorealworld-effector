import { createEffect } from 'effector'

import { tagService } from '@/app/services/tag/tag.service'

export const getAllTagsFx = createEffect(tagService.getAllTags)
