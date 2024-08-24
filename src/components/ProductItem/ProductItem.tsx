import { useCartActions } from "src/app/hooks/useCartActions"
import { ButtonAddToCart } from "src/components/ButtonAddToCart"
import { QuantityControls } from "src/components/QuantityControls"

import styles from "./ProductItem.module.scss"

type Props = {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
  cartId: number
}

export const ProductItem = ({
  id,
  title,
  price,
  thumbnail,
  quantity,
  cartId,
}: Props): JSX.Element => {
  const { addProductToCart, removeProductFromCart, isLoading } =
    useCartActions(cartId)
  const handleCardClick = (e: React.MouseEvent) => {
    if (
      !(
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLImageElement
      )
    ) {
      window.location.href = `/product/${id}`
    }
  }

  return (
    <div className={styles.productItem} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img src={thumbnail} alt={title} className={styles.image} />
      </div>

      <div className={styles.details}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}>${price}</p>
        </div>

        {quantity > 0 ? (
          <QuantityControls
            quantity={quantity}
            onAdd={() => addProductToCart(id, quantity)}
            onRemove={() => removeProductFromCart(id, quantity)}
            isLoading={isLoading}
          />
        ) : (
          <ButtonAddToCart
            isLoading={isLoading}
            onClick={(e) => {
              e.stopPropagation()
              addProductToCart(id, quantity)
            }}
          />
        )}
      </div>
    </div>
  )
}
