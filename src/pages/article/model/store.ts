import { restore, sample } from 'effector'

import { getArticleBySlugFx } from './effect'

export const $singleArticle = restore(getArticleBySlugFx, null)
export const isPending = getArticleBySlugFx.pending.map((pending) => pending)
