import { createEvent, restore } from 'effector'
import { createBrowserHistory, Location } from 'history'

export const history = createBrowserHistory({
  basename: '/effector-react-realworld-tailwind',
})

export const locationUpdated = createEvent<Location>()
export const $location = restore(locationUpdated, history.location)
export const $locationPathname = $location.map((location) => location.pathname)
export const $locationSearch = $location.map((location) => location.search)

history.listen((location) => {
  locationUpdated(location)
})

export const createQueryStore = (name: string) =>
  $locationSearch.map((search) => new URLSearchParams(search).get(name))
