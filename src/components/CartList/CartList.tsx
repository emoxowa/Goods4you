import { memo } from "react"
import { useCartActions } from "src/app/hooks/useCartActions"
import { CartProduct } from "src/app/store/slices/cartSlice/types"
import { CartItem } from "src/components/CartItem"

import styles from "./CartList.module.scss"

type Props = {
  cartId: number
  products: CartProduct[]
}
export const CartList = memo(({ cartId, products }: Props): JSX.Element => {
  const { addProductToCart, removeProductFromCart, deleteProductFromCart, isLoading } =
    useCartActions(cartId)

  const sortedProducts = [...products].sort((a, b) => a.id - b.id)

  return (
    <div className={styles.cartList} aria-label="Shopping Cart Items">
      {sortedProducts.map((product) => (
        <CartItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.discountedTotal}
          thumbnail={product.thumbnail}
          quantity={product.quantity}
          onAdd={() => addProductToCart(product.id, product.quantity)}
          onRemove={() => removeProductFromCart(product.id, product.quantity)}
          onDelete={() => deleteProductFromCart(product)}
          isLoading={isLoading}
        />
      ))}
    </div>
  )
})

CartList.displayName = "CartList"
