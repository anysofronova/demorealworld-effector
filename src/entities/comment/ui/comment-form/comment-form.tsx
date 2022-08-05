import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { object, string } from 'yup'

import { commentService } from '@/app/services/comment/comment.service'
import { CircleIcon } from '@/shared/ui'
import { FormTextarea } from '@/shared/ui/molecules'
import { makeErrors } from '@/shared/utils/makeErrors'
import { useEvent } from 'effector-react'
import { addCommentSubmitted } from '@/entities/comment/model/events'

const commentFormSchema = object({
  body: string().required(),
})

type CommentFormFields = {
  body: string
}
type CommentFormProps = {
  slug: string
}
export const CommentForm = ({ slug }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<CommentFormFields>({
    mode: 'onChange',
    resolver: yupResolver(commentFormSchema),
  })
  const submitAddComment = useEvent(addCommentSubmitted)
  const onSubmit: SubmitHandler<CommentFormFields> = useCallback(
    async (data) => {
      try {
        const res = await commentService.addComment(data, slug)
        if (res) {
          submitAddComment()
          toast.success('Comment added successfully!')
        }
      } catch (error: any) {
        console.log('error', error)
        makeErrors(error.response?.data?.errors)
      }
    },
    [submitAddComment],
  )
  return (
    <div className="flex items-center justify-center">
      <form
        className="w-full max-w-xl bg-white rounded-lg  pt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <FormTextarea<CommentFormFields>
              id="body"
              name="body"
              label="Body"
              placeholder="Write a comment"
              className=""
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-full md:w-full flex md:w-full px-3 items-end">
            <button
              disabled={!(isDirty && isValid)}
              className="ml-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-25"
              type="submit"
            >
              {isSubmitting ? (
                <div>
                  <CircleIcon />
                  Loading...
                </div>
              ) : (
                'Post Comment'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
