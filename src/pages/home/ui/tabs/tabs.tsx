import { Tab } from '@headlessui/react'
import { SingleArticle } from '@/entities/article/ui/single-article/single-article'

type TabsProps = {
  isLoggedIn: boolean
}

export const Tabs = ({ isLoggedIn }: TabsProps) => {
  return (
    <div className="sm:container sm:mx-auto mt-4 px-2">
      <Tab.Group>
        <Tab.List className="border-b border-neutral-500">
          {isLoggedIn && (
            <Tab
              className={({ selected }) =>
                selected
                  ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                  : 'text-neutral-500 font-light text-lg px-4 py-2'
              }
            >
              Your Feed
            </Tab>
          )}
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-indigo-600 text-indigo-600 font-light text-lg px-4 py-2'
                : 'text-neutral-500 font-light text-lg px-4 py-2'
            }
          >
            Global Feed
          </Tab>
        </Tab.List>
        <Tab.Panels>
          {isLoggedIn && <Tab.Panel>Content 1</Tab.Panel>}
          <Tab.Panel>
            <SingleArticle />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Tabs
