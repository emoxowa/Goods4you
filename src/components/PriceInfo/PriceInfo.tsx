import { useCartActions } from "src/app/hooks/useCartActions"
import { Product } from "src/app/store/api/types"
import { calculateDiscountedTotal } from "src/app/utils/calculateDiscountedTotal"
import { QuantityControls } from "src/components/QuantityControls"
import { Button } from "src/ui/Button"

import styles from "./PriceInfo.module.scss"

type Props = {
  id: number
  price: number
  discountPercentage: number
  quantity: number
  cartId: number
  product: Product
}
export const PriceInfo = ({
  id,
  price,
  discountPercentage,
  quantity,
  cartId,
  product,
}: Props): JSX.Element => {
  const discountedTotal = calculateDiscountedTotal(price, discountPercentage)
  const { addProductToCart, removeProductFromCart, isLoading } =
    useCartActions(cartId)

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.priceWrapper}>
          <p className={styles.discountedTotal}>
            ${discountedTotal.toFixed(2)}
          </p>
          <p className={styles.price}>${price.toFixed(2)}</p>
        </div>

        <p className={styles.discount}>
          Your discount: <span>{discountPercentage.toFixed(2)}%</span>
        </p>
      </div>

      {quantity > 0 ? (
        <QuantityControls
          quantity={quantity}
          onAdd={() => addProductToCart(id, quantity)}
          onRemove={() => removeProductFromCart(product, quantity)}
          size="medium"
          isLoading={isLoading}
        />
      ) : (
        <Button
          onClick={() => addProductToCart(id, quantity)}
          disabled={isLoading}
        >
          Add to cart
        </Button>
      )}
    </div>
  )
}
