import { createEvent } from 'effector'

export const commentFormSubmitted = createEvent<{ body: string }>()
export const commentDeleted = createEvent<string>()
