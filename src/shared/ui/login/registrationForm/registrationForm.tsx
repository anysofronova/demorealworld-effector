import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IForm, RegistrationFormFields } from './registrationForm.types'
import { useLocation } from 'react-use'
import { routes } from '@/app/routing/routes'
import { Link } from 'react-router-dom'
import { FormInput } from '@/shared/ui/login/registrationForm/formInput'

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
}

export const RegistrationForm: FC<IForm> = ({ title, subTitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>()

  const onSubmit = handleSubmit((data) => console.log('submitting...', data))

  const { pathname } = useLocation()
  const isSignUp = pathname === '/register'

  return (
    <div className={'flex w-full justify-center py-8 px-4'}>
      <form
        onSubmit={onSubmit}
        className={
          'flex flex-col justify-center items-center border shadow-md rounded-md p-8 gap-4 sm:w-3/4 max-w-[800px] w-full'
        }
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
          <FormInput<RegistrationFormFields>
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            className="mb-2"
            register={register}
            rules={{
              required: 'You must enter your Name.',
              minLength: {
                value: 6,
                message: 'Name cannot be shorter than 6 characters',
              },
            }}
            errors={errors}
          />
        )}

        <FormInput<RegistrationFormFields>
          id="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="Email"
          className="mb-2"
          register={register}
          rules={{
            required: 'You must enter your email address.',
            pattern: emailPattern,
          }}
          errors={errors}
        />

        <FormInput<RegistrationFormFields>
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2"
          register={register}
          rules={{
            required: 'You must enter your Password.',
            minLength: {
              value: 6,
              message: 'Password cannot be shorter than 6 characters',
            },
          }}
          errors={errors}
        />

        <button
          className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          type="submit"
        >
          {title}
        </button>
      </form>
    </div>
  )
}
