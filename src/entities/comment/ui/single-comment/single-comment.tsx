import { CommentContent } from '@/entities/comment/ui/comment-content'
import { CommentHeader } from '@/entities/comment/ui/comment-header'
import { IAuthor } from '@/shared/interfaces'

type SingleCommentProps = {
  createdAt: Date
  body: string
  author: IAuthor
}

export const SingleComment = ({
  createdAt,
  body,
  author,
}: SingleCommentProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 mb-8 border rounded-md shadow-sm justify-center w-full">
      <CommentHeader
        createdAt={createdAt}
        username={author.username}
        image={author.image}
      />
      <CommentContent body={body} />
    </div>
  )
}
