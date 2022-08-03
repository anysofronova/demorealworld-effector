import { OpenIcon } from '@/shared/ui'

import { OpenMenuProps } from './open-menu.types'

export const OpenMenu = ({ enableMode }: OpenMenuProps) => {
  return (
    <div className="-mr-2 -my-2 md:hidden">
      <button
        type="button"
        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-expanded="false"
        onClick={enableMode}
      >
        <span className="sr-only">Open menu</span>
        <OpenIcon />
      </button>
    </div>
  )
}
