import { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="mt-3">
      <div className="md:container md:mx-auto">{children}</div>
    </div>
  )
}