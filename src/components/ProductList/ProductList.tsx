import { memo } from "react"
import { useAppSelector } from "src/app/store"
import { Product } from "src/app/store/api/productApi/types"
import { cartSelector } from "src/app/store/slices/cartSlice"
import { ProductItem } from "src/components/ProductItem"

import styles from "./ProductList.module.scss"

type Props = {
  items: Product[]
}

export const ProductList = memo(({ items }: Props): JSX.Element => {
  const cart = useAppSelector(cartSelector)

  return (
    <div className={styles.productList} role="list">
      {items.map((item) => {
        const quantity =
          cart.response?.products.find((p) => p.id === item.id)?.quantity ?? 0

        return cart.response ? (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            quantity={quantity}
            cartId={cart.response?.id}
            product={item}
          />
        ) : (
          <></>
        )
      })}
    </div>
  )
})

ProductList.displayName = "ProductList"
