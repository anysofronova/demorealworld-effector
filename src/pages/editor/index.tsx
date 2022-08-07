import { useParams } from 'react-router'
import { useTitle } from 'react-use'

import { ArticleForm } from '@/pages/editor/ui/article-form'

export const EditorPage = () => {
  useTitle('Editor — Conduit')
  const { slug } = useParams()
  return (
    <div>
      <ArticleForm slug={slug || ''} />
    </div>
  )
}
