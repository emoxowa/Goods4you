import { calculateDiscountedTotal } from "src/app/utils/calculateDiscountedTotal"
import { Button } from "src/ui/Button"

import { QuantityControls } from "../QuantityControls"
import styles from "./PriceInfo.module.scss"

type Props = {
  id: number
  price: number
  discountPercentage: number
  quantity: number
  onAdd: () => void
  onRemove: () => void
}
export const PriceInfo = ({
  id,
  price,
  discountPercentage,
  quantity,
  onAdd,
  onRemove,
}: Props): JSX.Element => {
  const discountedTotal = calculateDiscountedTotal(price, discountPercentage)

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
          id={id}
          quantity={quantity}
          onAdd={onAdd}
          onRemove={onRemove}
          size="medium"
        />
      ) : (
        <Button onClick={onAdd}>Add to cart</Button>
      )}
    </div>
  )
}
