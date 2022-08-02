import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'

import { routes } from '@/app/routing/routes'

import { IForm, IInputs } from './form.types'

export const Form: FC<IForm> = ({ title, subTitle, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>()
  const onSign: SubmitHandler<IInputs> = (data) => data
  const { pathname } = useLocation()
  const isSignUp = pathname === '/register'
  const navigate = useNavigate()
  return (
    <div className={'flex w-full justify-center py-8'}>
      <form
        className={
          'flex flex-col justify-center items-center border shadow-md rounded-md p-8 gap-4 w-3/4 max-w-[800px]'
        }
        onSubmit={handleSubmit(onSign)}
      >
        <h2 className={'text-xl font-medium'}>{title}</h2>
        <div
          className={'font-light text-sm text-indigo-600 cursor-pointer'}
          aria-hidden="true"
          onClick={() =>
            navigate(isSignUp ? routes.LOGIN : routes.REGISTER, {
              replace: true,
            })
          }
        >
          {subTitle}
        </div>
        {isSignUp && (
          <input
            {...register('name', {
              required: true,
              pattern: /[a-zA-zа-яА-Я]/gi,
              maxLength: 30,
            })}
            placeholder={'Name'}
            type={'text'}
            className={'border-indigo-300 w-2/3 outline-none rounded-md'}
          />
        )}
        <input
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+\.\S+$/gi,
          })}
          placeholder={'Email'}
          type={'Email'}
          className={'border-indigo-300 w-2/3 outline-none rounded-md'}
        />
        <input
          {...register('password', {
            required: true,
            minLength: isSignUp ? 8 : undefined,
            maxLength: isSignUp ? 20 : undefined,
          })}
          placeholder={'Password'}
          type={'password'}
          className={'border-indigo-300 w-2/3 outline-none rounded-md'}
        />
        <button
          className={
            'flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 bg-indigo-600'
          }
        >
          {title}
        </button>
        <div className={''}>
          {isSignUp &&
            (errors?.password?.type === 'minLength' ||
              errors?.password?.type === 'maxLength') && (
              <p>
                The password cannot be shorter than 8 characters or longer than
                20 characters.
              </p>
            )}
          {errors?.email?.type === 'pattern' && (
            <p>Please enter a valid Email</p>
          )}
          {(errors?.email?.type === 'required' ||
            errors?.password?.type === 'required') && (
            <p>The fields are required</p>
          )}
          {error && <p>Wrong Email or Password</p>}
        </div>
      </form>
    </div>
  )
}
