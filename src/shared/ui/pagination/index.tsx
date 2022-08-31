import { memo } from 'react'

import { checkIsActive, usePagination } from '@/shared/hooks'
import { Item } from '@/shared/ui/pagination/item'

export type PaginationProps = Readonly<{
  total: number
  pageSize: number
  current: number
  onPageChange: (x: number) => void
}>

export const Pagination = memo((props: PaginationProps) => {
  const { show, items, handleClick } = usePagination(props)

  return show ? (
    <nav>
      <ul className="pagination">
        {items.map((item) => {
          return (
            <li key={item} className="page-item">
              <Item
                key={item}
                active={checkIsActive(item, props.current)}
                item={item}
                onItemClick={handleClick}
              >
                {item}
              </Item>
            </li>
          )
        })}
      </ul>
    </nav>
  ) : null
})
