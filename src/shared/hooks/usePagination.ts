import { useCallback, useMemo } from 'react'

import { PaginationProps } from '@/shared/ui/pagination'

export const usePagination = ({
  total,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const items = useMemo(() => createArray(total, pageSize), [total, pageSize])
  const show = total > pageSize

  const handleClick = useCallback(
    (item: number) => {
      onPageChange(item)
    },
    [onPageChange],
  )

  return { items, show, handleClick }
}

export const createArray = (total: number, pageSize: number): number[] => {
  return Array.from({ length: Math.ceil(total / pageSize) }, (_, x) => x + 1)
}

export const checkIsActive = (item: number, current: number): boolean =>
  item === current
