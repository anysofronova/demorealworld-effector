import { useStore } from 'effector-react'
import { useEffect } from 'react'

import { getAllArticlesFx } from '@/app/model/effect'
import { $articles } from '@/app/model/model'

export const Application = () => {
  const articles = useStore($articles)
  useEffect(() => {
    getAllArticlesFx()
  }, [])

  useEffect(() => {
    console.log(articles)
  }, [articles])

  return <div>Application</div>
}
