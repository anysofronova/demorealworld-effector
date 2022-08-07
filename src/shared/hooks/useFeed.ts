import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'

import * as model from '@/pages/home/pages/feed-by-tag/model'
import {
  $isEmptyFeed,
  $totalPages,
  getFeedFx,
} from '@/pages/home/pages/feed-by-tag/model'

export const useFeed = (pageSize: number) => {
  const [{ page, tag }, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    tag: StringParam,
  })
  const loading = useUnit(getFeedFx.pending)
  const isEmpty = useUnit($isEmptyFeed)
  const totalPages = useUnit($totalPages)

  useEffect(() => {
    if (tag) {
      model.getFeedFx({ page, tag, pageSize })
    }
  }, [page, tag, pageSize])

  const handlePageChange = (x: number) => {
    setQuery({ page: x })
  }

  return {
    page,
    loading,
    isEmpty,
    totalPages,
    handlePageChange,
  }
}
