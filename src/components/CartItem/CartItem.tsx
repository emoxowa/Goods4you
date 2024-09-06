import { memo } from "react"
import { Link } from "react-router-dom"
import { ButtonAddToCart } from "src/components/ButtonAddToCart"
import { QuantityControls } from "src/components/QuantityControls"

import styles from "./CartItem.module.scss"

type Props = {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
  onAdd: () => void
  onRemove: () => void
  onDelete: () => void
  isLoading: boolean
}

export const CartItem = memo(
  ({
    id,
    title,
    price,
    thumbnail,
    quantity,
    onAdd,
    onRemove,
    onDelete,
    isLoading,
  }: Props): JSX.Element => {
    return (
      <div className={styles.cartItem}>
        <div className={`${styles.details} ${!quantity ? styles.faded : ""}`}>
          <img src={thumbnail} alt={title} className={styles.image} />

          <div className={styles.wrapper}>
            <Link to={`/product/${id}`}>
              <h3 className={styles.title}>{title}</h3>
            </Link>
            <p className={styles.price}>${price}</p>
          </div>
        </div>

        {quantity > 0 ? (
          <div className={styles.controls}>
            <QuantityControls
              quantity={quantity}
              onAdd={onAdd}
              onRemove={onRemove}
              isLoading={isLoading}
              aria-label={`Change quantity of ${title}`}
            />

            <button
              disabled={isLoading}
              onClick={onDelete}
              className={styles.deleteButton}
              aria-label={`Delete ${title} from cart`}
            >
              Delete
            </button>
          </div>
        ) : (
          <ButtonAddToCart
            className={styles.addToCartButton}
              onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAdd()
            }}
            aria-label={`Add ${title} to cart`}
            isLoading={isLoading}
          />
        )}
      </div>
    )
  },
)

CartItem.displayName = "CartItem"