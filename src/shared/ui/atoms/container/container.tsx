import { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="md:mx-auto">{children}</div>
}
