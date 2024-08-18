import { memo } from "react"
import { useAppSelector } from "src/app/store"
import { Product } from "src/app/store/api/types"
import { cartSelector } from "src/app/store/slices/cartSlice"
import { ProductItem } from "src/components/ProductItem"

import styles from "./ProductList.module.scss"

type Props = {
  items: Product[]
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const ProductList = memo(
  ({ items, onAdd, onRemove }: Props): JSX.Element => {
    const cart = useAppSelector(cartSelector)

    return (
      <div className={styles.productList} role="list">
        {items.map((item) => {
          const quantity =
            cart.response?.products.find((p) => p.id === item.id)?.quantity ?? 0

          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
              quantity={quantity}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          )
        })}
      </div>
    )
  },
)

ProductList.displayName = "ProductList"
