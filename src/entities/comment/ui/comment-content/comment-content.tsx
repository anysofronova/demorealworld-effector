type CommentContentProps = {
  body: string
}
export const CommentContent = ({ body }: CommentContentProps) => {
  return <div className="-mt-4 text-gray-500 w-full">{body}</div>
}
