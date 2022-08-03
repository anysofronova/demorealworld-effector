import classNames from 'classnames'
import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { InputProps } from '@/shared/ui/atoms'

export type InputSize = 'medium' | 'large'

export type PasswordInputProps = InputProps &
  Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  >

const sizeMap: { [key in InputSize]: string } = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { id, name, label, size = 'medium', className = '', placeholder, ...props },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const togglePassword = useCallback(() => {
      setShowPassword((prev) => !prev)
    }, [])

    return (
      <div>
        <div className="relative mt-1">
          <input
            {...props}
            ref={ref}
            id={id}
            type={showPassword ? 'text' : 'password'}
            name={name}
            aria-label={label}
            placeholder={placeholder}
            className={classNames([
              'relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30',
              sizeMap[size],
              className,
            ])}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center mr-3 rounded-lg focus:outline-none focus:ring focus:ring-primary-500 border-transparent focus:border-transparent focus:ring-0"
            onClick={(e) => {
              e.preventDefault()
              togglePassword()
            }}
          >
            {showPassword ? (
              <HiEyeOff className="text-xl text-gray-500 cursor-pointer hover:text-gray-600" />
            ) : (
              <HiEye className="text-xl text-gray-500 cursor-pointer hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'
