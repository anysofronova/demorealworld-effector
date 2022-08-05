import { CommentContent } from '@/entities/comment/ui/comment-content'
import { CommentHeader } from '@/entities/comment/ui/comment-header'
import { IAuthor } from '@/shared/interfaces'

type SingleCommentProps = Readonly<{
  createdAt: Date
  body: string
  author: IAuthor
  slug: string
  id: number
}>

export const SingleComment = ({
  createdAt,
  body,
  author,
  slug,
  id,
}: SingleCommentProps) => {
  return (
    <div className="flex flex-col gap-8 p-4 mb-8 border rounded-md shadow-sm justify-center w-full">
      <CommentHeader
        createdAt={createdAt}
        username={author.username}
        image={author.image}
        slug={slug}
        id={id}
      />
      <CommentContent body={body} />
    </div>
  )
}
