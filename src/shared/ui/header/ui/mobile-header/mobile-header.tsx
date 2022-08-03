import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { CloseIcon, UserSettings } from '@/shared/ui'

import { MobileHeaderTypes } from './mobile-header.types'

export const MobileHeader = ({
  disableMode,
  mode,
  isLoggedIn,
  user,
}: MobileHeaderTypes) => {
  return (
    <div
      className={clsx(
        'absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50',
        !mode && 'hidden',
      )}
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={disableMode}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6 md:py-1">
          {isLoggedIn ? (
            <div>
              <UserSettings user={user} disableMode={disableMode} />
            </div>
          ) : (
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 p-4">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to={routes.HOME_PAGE}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  onClick={disableMode}
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to={routes.REGISTER}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={disableMode}
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Not a user?
                  <Link
                    to={routes.LOGIN}
                    className="text-indigo-600 hover:text-indigo-500 ml-1"
                    onClick={disableMode}
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
