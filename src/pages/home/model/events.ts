import { createEvent } from 'effector'

export const tagSelected = createEvent<string>()

console.log('tagSelected', tagSelected)
