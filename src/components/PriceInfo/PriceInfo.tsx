import { useCartActions } from "src/app/hooks/useCartActions"
import { calculateDiscountedTotal } from "src/app/utils/calculateDiscountedTotal"
import { Button } from "src/ui/Button"

import { QuantityControls } from "../QuantityControls"
import styles from "./PriceInfo.module.scss"

type Props = {
  id: number
  price: number
  discountPercentage: number
  quantity: number
  cartId: number
}
export const PriceInfo = ({
  id,
  price,
  discountPercentage,
  quantity,
  cartId,
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
          onRemove={() => removeProductFromCart(id, quantity)}
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
