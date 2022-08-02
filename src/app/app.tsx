import './styles/global.css'

// import { useStore } from 'effector-react'
// import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import { appRouting } from '@/app/routing/appRouting'
// import { getAllArticlesFx } from '@/app/model/effect'
// import { $articles } from '@/app/model/model'

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
