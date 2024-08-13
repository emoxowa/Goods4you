import { PrimaryButton } from "src/ui/PrimaryButton"

import { QuantityControls } from "../QuantityControls"
import styles from "./PriceInfo.module.scss"

type Props = {
  price: number
  discountPercentage: number
  discountTotal: number
  quantity: number
  onAdd: () => void
  onRemove: () => void
}
export const PriceInfo = ({
  price,
  discountPercentage,
  discountTotal,
  quantity,
  onAdd,
  onRemove,
}: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.priceWrapper}>
          <p className={styles.discountTotal}>${discountTotal}</p>
          <p className={styles.price}>${price}</p>
        </div>

        <p className={styles.discount}>
          Your discount: <span>{discountPercentage}%</span>
        </p>
      </div>

      {quantity > 0 ? (
        <QuantityControls
          id={0}
          quantity={1}
          onAdd={onAdd}
          onRemove={onRemove}
          size="medium"
        />
      ) : (
        <PrimaryButton onClick={onAdd}>Add to cart</PrimaryButton>
      )}
    </div>
  )
}
