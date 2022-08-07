import { yupResolver } from '@hookform/resolvers/yup'
import { useGate } from 'effector-react'
import { useCallback, useEffect, useLayoutEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { commentFormSubmitted } from '@/entities/comment/model/events'
import { makeErrors } from '@/shared/lib/makeErrors'
import { CircleIcon } from '@/shared/ui'
import { FormTextarea } from '@/shared/ui/molecules'

import * as model from '../../model'
import { addCommentFx } from '../../model'
import { commentFormSchema } from '../comment-form/schema'

export type CommentFormFields = {
  body: string
}

type CommentFormProps = {
  slug: string
}

export const CommentForm = ({ slug }: CommentFormProps) => {
  useGate(model.Gate, { slug })

  const defaultValues = {
    body: '',
  }

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<CommentFormFields>({
    mode: 'onChange',
    resolver: yupResolver(commentFormSchema),
  })

  const onSubmit: SubmitHandler<CommentFormFields> = useCallback(
    async (data) => {
      try {
        const res = await addCommentFx({ slug, body: data.body })
        if (res) {
          commentFormSubmitted(data)
          toast.success('Comment added successfully!')
        }
      } catch (error: any) {
        console.log('error', error)
        makeErrors(error.response?.data?.errors)
      }
    },
    [slug],
  )

  useLayoutEffect(() => {
    setFocus('body')
  }, [setFocus])

  useEffect(() =>
    model.addCommentFx.done.watch(() => {
      reset(defaultValues)
    }),
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
