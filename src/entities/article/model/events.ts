import { createEvent } from 'effector'

import * as types from '@/shared/interfaces'

export const createFormSubmitted = createEvent()

export const favoriteArticleToggled = createEvent<types.SelectedArticle>()
