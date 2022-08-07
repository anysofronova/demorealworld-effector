import { ButtonHTMLAttributes, memo } from 'react'

export type ButtonProps = Readonly<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'sm' | 'lg'
  }
>

type Props = ButtonProps &
  Readonly<{
    onItemClick: (x: number) => void
    active: boolean
    item: number
  }>

export const Item = memo(({ active, onItemClick, item, children }: Props) => {
  const onClick = () => onItemClick(item)

  return (
    <button
      className="pagination-item"
      data-active={active}
      type="button"
      onClick={onClick}
    >
      <span className="page-link">{children}</span>
    </button>
  )
})

Item.displayName = 'Item'
