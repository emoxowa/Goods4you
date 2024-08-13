import { memo } from "react"
import minus from "src/assets/images/svg/minus.svg"
import minusSmall from "src/assets/images/svg/minusSmall.svg"
import plus from "src/assets/images/svg/plus.svg"
import plusSmall from "src/assets/images/svg/plusSmall.svg"
import { SquareButton } from "src/ui/SquareButton"

import styles from "./QuantityControls.module.scss"

type Props = {
  id: number
  quantity: number
  size?: "small" | "medium"
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const QuantityControls = memo(
  ({ id, quantity, size = "small", onAdd, onRemove }: Props): JSX.Element => {
    return (
      <div className={styles.controls}>
        <SquareButton
          onClick={(e) => {
            e.stopPropagation()
            onRemove(id)
          }}
          className={styles.button}
          size={size}
          aria-label="Decrease quantity"
        >
          <img
            src={size === "small" ? minusSmall : minus}
            alt="Decrease quantity"
          />
        </SquareButton>

        <span className={styles.quantity}>
          {quantity} {quantity === 1 ? "item" : "items"}
        </span>

        <SquareButton
          onClick={(e) => {
            e.stopPropagation()
            onAdd(id)
          }}
          className={styles.button}
          size={size}
          aria-label="Increase quantity"
        >
          <img
            src={size === "small" ? plusSmall : plus}
            alt="Increase quantity"
          />
        </SquareButton>
      </div>
    )
  },
)

QuantityControls.displayName = "QuantityControls"