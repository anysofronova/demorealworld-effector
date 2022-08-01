import './styles/global.css'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getAllArticlesFx } from '@/app/model/effect'
import { $articles } from '@/app/model/model'
import { Login } from '@/pages/login'
import { routes } from '@/app/routing/routes'
import MainLayout from '@/app/components/layouts/MainLayout'
import { Home } from '@/pages/home'

export const Application = () => {
  const articles = useStore($articles)
  useEffect(() => {
    getAllArticlesFx()
  }, [])

  useEffect(() => {
    console.log(articles)
  }, [articles])

  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.HOME} element={<Home />} />
      </Route>
      <Route path={'*'} element={<Home />} />
    </Routes>
  )
}
