import { memo } from "react"
import { CartItem } from "src/components/CartItem"

import styles from "./CartList.module.scss"

type Props = {
  items: {
    id: number
    title: string
    price: number
    imageUrl: string
    quantity: number
  }[]
  onAdd: (id: number) => void
  onRemove: (id: number) => void
  onDelete: (id: number) => void
}

export const CartList = memo(
  ({ items, onAdd, onRemove, onDelete }: Props): JSX.Element => {
    return (
      <div className={styles.cartList} aria-label="Shopping Cart Items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
          />
        ))}
      </div>
    )
  },
)

CartList.displayName = "CartList"