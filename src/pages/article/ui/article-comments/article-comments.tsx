import { useList, useUnit } from 'effector-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '@/app/routing/routes'
import { $comments, getCommentsFx } from '@/entities/comment'
import { CommentForm } from '@/entities/comment/ui/comment-form'
import { SingleComment } from '@/entities/comment/ui/single-comment'
import { useAuth } from '@/shared/hooks/useAuth'
import { IComment } from '@/shared/interfaces'

type ArticleCommentsProps = {
  slug: string
}

export const ArticleComments = ({ slug }: ArticleCommentsProps) => {
  const comments = useUnit($comments)
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

  const { user } = useAuth()
  const isLoggedIn = Boolean(user)

  useEffect(() => {
    getCommentsFx(slug)
  }, [slug])

  return (
    <div className="flex flex-col gap-8 sm:px-8 px-4">
      {isLoggedIn ? (
        <CommentForm slug={slug} />
      ) : (
        <div className="flex items-center justify-center sm:container sm:m-auto sm:max-w-[580px]">
          <Link
            className="text-base mr-1 font-medium text-blue-500 hover:text-blue-700"
            to={routes.LOGIN}
          >
            Sign in
          </Link>
          or
          <Link
            className="text-base mx-1 font-medium text-blue-500 hover:text-blue-700"
            to={routes.LOGIN}
          >
            sign up
          </Link>
          to add comments on this article.
        </div>
      )}
      <div className="flex flex-col items-center justify-center sm:container sm:m-auto sm:max-w-[580px]">
        {commentList}
      </div>
    </div>
  )
}
