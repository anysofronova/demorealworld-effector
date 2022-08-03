import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'

export type FormErrorMessageProps = {
  className?: string
}

export const FormErrorMessage: FC<PropsWithChildren<FormErrorMessageProps>> = ({
  children,
  className,
}) => (
  <p
    className={classNames(
      'font-serif text-sm text-left block text-red-600',
      className,
    )}
  >
    {children}
  </p>
)
