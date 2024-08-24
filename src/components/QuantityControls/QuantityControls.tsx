import { memo } from "react"
import minus from "src/assets/images/svg/minus.svg"
import minusSmall from "src/assets/images/svg/minusSmall.svg"
import plus from "src/assets/images/svg/plus.svg"
import plusSmall from "src/assets/images/svg/plusSmall.svg"
import { Button } from "src/ui/Button"

import styles from "./QuantityControls.module.scss"

type Props = {
  quantity: number
  size?: "small" | "medium"
  onAdd: () => void
  onRemove: () => void
  isLoading?: boolean
}

export const QuantityControls = memo(
  ({
    quantity,
    size = "small",
    onAdd,
    onRemove,
    isLoading,
  }: Props): JSX.Element => {
    return (
      <div
        className={`${styles.controls} ${size === "small" ? styles.small : styles.medium}`}
      >
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className={styles.button}
          size={size}
          aria-label="Decrease quantity"
          variant="square"
          disabled={isLoading}
        >
          <img
            src={size === "small" ? minusSmall : minus}
            alt="Decrease quantity"
          />
        </Button>

        <span
          className={`${styles.quantity} ${size === "small" ? styles.small : styles.medium}`}
        >
          {quantity} {quantity === 1 ? "item" : "items"}
        </span>

        <Button
          onClick={(e) => {
            e.stopPropagation()
            onAdd()
          }}
          className={styles.button}
          size={size}
          aria-label="Increase quantity"
          variant="square"
          disabled={isLoading}
        >
          <img
            src={size === "small" ? plusSmall : plus}
            alt="Increase quantity"
          />
        </Button>
      </div>
    )
  },
)

QuantityControls.displayName = "QuantityControls"
