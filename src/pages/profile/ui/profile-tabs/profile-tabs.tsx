import { Tab } from '@headlessui/react'

export const ProfileTabs = () => {
  return (
    <div className="sm:container sm:mx-auto mt-4 px-2">
      <Tab.Group>
        <Tab.List className="border-b border-neutral-500">
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                : 'text-neutral-500 font-light text-lg px-4 py-2'
            }
          >
            My Articles
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                : 'text-neutral-500 font-light text-lg px-4 py-2'
            }
          >
            Favorited Articles
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ProfileTabs
