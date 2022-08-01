import styles from './form.module.scss'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm, IInputs } from './form.types'

const Form: FC<IForm> = ({ title, subTitle, isSignUp, buttonText, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>()
  const onSign: SubmitHandler<IInputs> = (data) => data
  return (
    <form onSubmit={handleSubmit(onSign)} className={styles.form}>
      <h2>{title}</h2>
      <span>{subTitle}</span>
      <input
        {...register('email', {
          required: true,
          pattern: /^\S+@\S+\.\S+$/gi,
        })}
        placeholder={'Email'}
      />
      <input
        {...register('password', {
          required: true,
          minLength: isSignUp ? 8 : undefined,
          maxLength: isSignUp ? 20 : undefined,
        })}
        placeholder={'Password'}
        type={'password'}
      />
      <button className={'button'}>{buttonText}</button>
      <div className={styles.errors}>
        {isSignUp &&
          (errors?.password?.type === 'minLength' ||
            errors?.password?.type === 'maxLength') && (
            <p>
              The password cannot be shorter than 8 characters or longer than 20
              characters.
            </p>
          )}
        {errors?.email?.type === 'pattern' && <p>Please enter a valid Email</p>}
        {(errors?.email?.type === 'required' ||
          errors?.password?.type === 'required') && (
          <p>The fields are required</p>
        )}
        {error && <p>Wrong Email or Password</p>}
      </div>
    </form>
  )
}

export default Form
