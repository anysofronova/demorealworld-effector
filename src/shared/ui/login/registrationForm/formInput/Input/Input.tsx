import { FC, forwardRef } from 'react'
import clsx from 'clsx'

// @ts-ignore
export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type = 'text', className = '', placeholder, ...props }, ref) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        className={clsx([
          'relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30',
          className,
        ])}
        {...props}
      />
    )
  },
)
