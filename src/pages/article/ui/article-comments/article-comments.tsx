import { useList, useStore } from 'effector-react'
import { useEffect } from 'react'

import { $comments, getCommentsFx } from '@/entities/comment'
import { CommentForm } from '@/entities/comment/ui/comment-form'
import { SingleComment } from '@/entities/comment/ui/single-comment'
import { IComment } from '@/shared/interfaces'

type ArticleCommentsProps = {
  slug: string
}

export const ArticleComments = ({ slug }: ArticleCommentsProps) => {
  const comments = useStore($comments)
  const commentList = useList<IComment>($comments, {
    keys: [comments],
    fn: (comment) => (
      <SingleComment
        key={comment.id}
        createdAt={comment.createdAt}
        body={comment.body}
        author={comment.author}
        slug={slug}
        id={comment.id}
      />
    ),
  })

  useEffect(() => {
    getCommentsFx(slug)
  }, [slug])

  return (
    <div className="flex flex-col gap-8 sm:px-8 px-4">
      <CommentForm slug={slug} />
      <div className="flex flex-col items-center justify-center sm:container sm:m-auto sm:max-w-[580px]">
        {commentList}
      </div>
    </div>
  )
}
