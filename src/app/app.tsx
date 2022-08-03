import './styles/global.css'

import { useRoutes } from 'react-router-dom'

import { appRouting } from '@/app/routing/appRouting'

export const Application = () => {
  const appRoutes = useRoutes(appRouting)
  return <>{appRoutes}</>
}
