import './styles/global.css'

import { Suspense } from 'react'
// import { useStore } from 'effector-react'
// import { lazy, useEffect } from 'react'
import { Route, RouteObject, Routes, useRoutes } from 'react-router-dom'

import { appRouting } from '@/app/routing/appRouting'
// import { getAllArticlesFx } from '@/app/model/effect'
// import { $articles } from '@/app/model/model'
import { routes } from '@/app/routing/routes'
import { namedLazy } from '@/shared/utils/namedLazy'

export const Application = () => {
  // const articles = useStore($articles)
  // useEffect(() => {
  //   getAllArticlesFx()
  // }, [])
  //
  // useEffect(() => {
  //   console.log(articles)
  // }, [articles])
  const appRoutes = useRoutes(appRouting)
  return <>{appRoutes}</>
}
