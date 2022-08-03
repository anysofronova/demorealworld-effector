import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'

export const HomeLogo = () => {
  return (
    <div className="flex">
      <Link to={routes.HOME_PAGE} className="flex">
        <span className="sr-only">Workflow</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
      </Link>
    </div>
  )
}
