import { yupResolver } from '@hookform/resolvers/yup'
import { useStore } from 'effector-react'
import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { authService } from '@/app'
import { routes } from '@/app/routing/routes'
import { userService } from '@/app/services/user'
import { $profileInfo, getProfileInfoFx } from '@/pages/settings/model'
import { settingsFormSchema } from '@/pages/settings/ui/settings-form/schema/settings-form.schema'
import {
  SettingData,
  SettingsFormFields,
} from '@/pages/settings/ui/settings-form/settings-form.types'
import { CircleIcon, Skeleton } from '@/shared/ui'
import { FormInput, FormTextarea } from '@/shared/ui/molecules'

export const SettingsForm = () => {
  const profileInfo = useStore($profileInfo)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<SettingsFormFields>({
    mode: 'onChange',
    resolver: yupResolver(settingsFormSchema),
  })
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<SettingsFormFields> = useCallback(
    async (data) => {
      try {
        const res = await userService.updateUserProfile(data)
        if (res) {
          toast.success('Profile updated successfully!')
          navigate(routes.HOME_PAGE)
        }
      } catch (error: any) {
        const [errorMessage] = Object.values(error.response.data.errors)
        toast.error(errorMessage ? String(errorMessage) : 'Error')
      }
    },
    [navigate],
  )

  useEffect(() => {
    getProfileInfoFx()
  }, [])
  const loading = useStore(getProfileInfoFx.pending)
  useEffect(() => {
    if (profileInfo?.user) {
      Object.entries(profileInfo.user).map(([key, value]) =>
        setValue(key as SettingData, value),
      )
    }
  }, [profileInfo?.user, setValue])

  const handleLogout = useCallback(() => {
    authService.logout()
    navigate(routes.HOME_PAGE)
  }, [navigate])
  return (
    <div
      className={
        'flex flex-col justify-center w-full justify-center pt-2 pb-1 px-4 max-w-[540px] mx-auto'
      }
    >
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <form
            className={
              'flex flex-col justify-center items-center py-8 gap-4 w-full'
            }
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className={'text-xl font-medium'}>Your Settings</h2>

            <FormInput<SettingsFormFields>
              id="image"
              type="text"
              name="image"
              label="Image URL"
              placeholder="URL of profile picture"
              className="mb-2"
              register={register}
              errors={errors}
            />

            <FormInput<SettingsFormFields>
              id="username"
              type="text"
              name="username"
              label="Username"
              placeholder="Username"
              className="mb-2"
              rules={{ required: 'This field is required.' }}
              register={register}
              errors={errors}
            />

            <FormTextarea<SettingsFormFields>
              id="bio"
              name="bio"
              label="Bio"
              placeholder="Short bio about you"
              className="mb-2"
              register={register}
              errors={errors}
            />

            <FormInput<SettingsFormFields>
              id="email"
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              className="mb-2"
              register={register}
              errors={errors}
            />

            <FormInput<SettingsFormFields>
              id="password"
              type="text"
              name="password"
              label="Password"
              placeholder="New Password"
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
                'Update Settings'
              )}
            </button>
          </form>
          <hr className="my-1" />
          <div>
            <button
              type="button"
              className="mt-5 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={handleLogout}
            >
              Or click here to logout.
            </button>
          </div>
        </>
      )}
    </div>
  )
}
