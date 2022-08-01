import { FC, PropsWithChildren, Suspense } from 'react'

import { Loader } from '@/shared/ui/loader/loader'

export const Suspensy: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>
}
