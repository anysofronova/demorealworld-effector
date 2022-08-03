import { useTitle } from 'react-use'

import { ArticleForm } from '@/pages/editor/ui/article-form'

export const EditorPage = () => {
  useTitle('Editor — Conduit')

  return (
    <div>
      <ArticleForm />
    </div>
  )
}
