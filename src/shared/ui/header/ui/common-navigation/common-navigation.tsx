import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'

export const CommonNavigation = () => {
  return (
    <div className="justify-between items-center hidden md:flex md:space-x-10 w-full">
      <nav className="hidden md:flex space-x-10">
        <Link
          to={routes.HOME_PAGE}
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Home
        </Link>
      </nav>
      <div className="hidden md:flex items-center justify-end lg:w-0">
        <Link
          to={routes.LOGIN}
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Sign in
        </Link>
        <Link
          to={routes.REGISTER}
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}
