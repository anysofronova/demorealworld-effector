import { FC, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLocation } from 'react-use'

import { routes } from '@/app/routing/routes'
import AuthService from '@/app/services/auth/auth.service'
import { useAuth } from '@/shared/hooks/useAuth'
import { CircleIcon } from '@/shared/ui'
import { FormInput } from '@/shared/ui/molecules'
import { FormPassword } from '@/shared/ui/molecules/form-password'

import { AuthFormFields, IForm } from './auth-form.types'

export const AuthForm: FC<IForm> = ({ title, subTitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<AuthFormFields>()
  const { pathname } = useLocation()
  const { user, setUser } = useAuth()
  const isSignUp = pathname === '/register'
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<AuthFormFields> = useCallback(
    async (data) => {
      try {
        const response = isSignUp
          ? await AuthService.register(
              String(data.username),
              data.email,
              data.password,
            )
          : await AuthService.login(data.email, data.password)
        if (response.user) {
          setUser(response.user)
          toast.success('Successful authorization!')
          navigate(routes.HOME)
        }
      } catch (error: any) {
        const [errorMessage] = Object.values(error.response.data.errors)
        toast.error(errorMessage ? String(errorMessage) : 'Error')
      }
    },
    [isSignUp, navigate, setUser],
  )

  return (
    <div className={'flex w-full justify-center py-8 px-4'}>
      <form
        className={
          'flex flex-col justify-center items-center border shadow-md rounded-md p-8 gap-4 sm:w-3/4 max-w-[600px] w-full'
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={'text-xl font-medium'}>{title}</h2>
        <Link
          className={'font-light text-sm text-indigo-600 cursor-pointer'}
          aria-hidden="true"
          to={isSignUp ? routes.LOGIN : routes.REGISTER}
        >
          {subTitle}
        </Link>
        {isSignUp && (
          <FormInput<AuthFormFields>
            id="username"
            type="text"
            name="username"
            label="Username"
            placeholder="Username"
            className="mb-2"
            register={register}
            rules={{ required: 'You must enter your name.' }}
            errors={errors}
          />
        )}

        <FormInput<AuthFormFields>
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          className="mb-2"
          register={register}
          rules={{ required: 'You must enter your email.' }}
          errors={errors}
        />

        <FormPassword<AuthFormFields>
          id="password"
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          className="mb-2"
          register={register}
          rules={{ required: 'You must enter your password.' }}
          errors={errors}
        />

        <button
          disabled={!isDirty && !isValid}
          className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-25"
          type="submit"
        >
          {isSubmitting ? (
            <div>
              <CircleIcon />
              Loading...
            </div>
          ) : (
            title
          )}
        </button>
      </form>
    </div>
  )
}
