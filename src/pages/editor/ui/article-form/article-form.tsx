import { yupResolver } from '@hookform/resolvers/yup'
import { useEvent, useStore } from 'effector-react'
import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { articleService } from '@/app/services/article/article.service'
import { createFormSubmitted } from '@/entities/article/model/events'
import {
  ArticleData,
  ArticleFormFields,
} from '@/pages/editor/ui/article-form/article-form.types'
import { articleFormSchema } from '@/pages/editor/ui/article-form/schema/article-form.schema'
import { CircleIcon } from '@/shared/ui'
import { FormInput, FormTextarea } from '@/shared/ui/molecules'
import { makeErrors } from '@/shared/utils/makeErrors'
import { getArticleBySlugFx } from '@/pages/article/model'
import { $singleArticle, isPending } from '@/pages/article/model/store'
import { EditorSkeleton } from '@/shared/ui/atoms/editor-skeleton'

type ArticleFormProps = {
  slug: string
}
export const ArticleForm = ({ slug }: ArticleFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<ArticleFormFields>({
    mode: 'onChange',
    resolver: yupResolver(articleFormSchema),
  })
  const submitCreateForm = useEvent(createFormSubmitted)
  const navigate = useNavigate()
  useEffect(() => {
    if (slug) getArticleBySlugFx(slug)
  }, [])
  const article = useStore($singleArticle)
  useEffect(() => {
    if (article) {
      Object.entries(article).map(([key, value]) =>
        setValue(
          key as ArticleData,
          key === 'tagList' ? value.join(' ') : value,
        ),
      )
    }
  }, [article, setValue])
  const isLoading = useStore(isPending)
  const onSubmit: SubmitHandler<ArticleFormFields> = useCallback(
    async (data) => {
      try {
        const res = slug
          ? await articleService.updateArticle(
              {
                ...data,
                tagList: String(data.tagList).toLowerCase().split(' '),
              },
              slug,
            )
          : await articleService.createArticle({
              ...data,
              tagList: String(data.tagList).toLowerCase().split(' '),
            })
        if (res) {
          submitCreateForm()
          toast.success('Article added successfully!')
          navigate(`/article/${res.article.slug}`)
        }
      } catch (error: any) {
        console.log('error', error)
        makeErrors(error.response?.data?.errors)
      }
    },
    [navigate, submitCreateForm],
  )

  return (
    <div
      className={
        'flex flex-col justify-center w-full justify-center pt-2 pb-1 px-4 max-w-[540px] mx-auto'
      }
    >
      {isLoading ? (
        <EditorSkeleton />
      ) : (
        <form
          className={
            'flex flex-col justify-center items-center py-8 gap-4 w-full'
          }
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput<ArticleFormFields>
            id="title"
            type="text"
            name="title"
            label="Article Title"
            placeholder="Article Title"
            className="mb-2"
            rules={{ required: 'This field is required.' }}
            register={register}
            errors={errors}
          />

          <FormInput<ArticleFormFields>
            id="description"
            type="text"
            name="description"
            label="About"
            placeholder="What's this article about?"
            className="mb-2"
            rules={{ required: 'This field is required.' }}
            register={register}
            errors={errors}
          />

          <FormTextarea<ArticleFormFields>
            id="body"
            name="body"
            label="Body"
            placeholder="Write your article (in markdown)"
            className="mb-2"
            rules={{ required: 'This field is required.' }}
            register={register}
            errors={errors}
          />

          <FormInput<ArticleFormFields>
            id="tagList"
            type="text"
            name="tagList"
            label="Tags"
            placeholder="Enter Tags"
            className="mb-2"
            register={register}
            errors={errors}
          />

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
              'Publish Article'
            )}
          </button>
        </form>
      )}
      <hr className="my-1" />
    </div>
  )
}
