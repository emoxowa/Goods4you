import { ButtonAddToCart } from "src/components/ButtonAddToCart"
import { QuantityControls } from "src/components/QuantityControls"

import styles from "./ProductItem.module.scss"

type Props = {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const ProductItem = ({
  id,
  title,
  price,
  thumbnail,
  quantity,
  onAdd,
  onRemove,
}: Props): JSX.Element => {
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
            id={id}
            quantity={quantity}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ) : (
          <ButtonAddToCart
            onClick={(e) => {
              e.stopPropagation()
              onAdd(id)
            }}
          />
        )}
      </div>
    </div>
  )
}
