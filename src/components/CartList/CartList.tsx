import { memo } from "react"
import { CartProduct } from "src/app/store/slices/cartSlice/types"
import { CartItem } from "src/components/CartItem"

import styles from "./CartList.module.scss"

type Props = {
  products: CartProduct[]
  onAdd: (id: number) => void
  onRemove: (id: number) => void
  onDelete: (id: number) => void
}
export const CartList = memo(
  ({ products, onAdd, onRemove, onDelete }: Props): JSX.Element => {
    return (
      <div className={styles.cartList} aria-label="Shopping Cart Items">
        {products.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.discountedTotal}
            imageUrl={product.thumbnail}
            quantity={product.quantity}
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
