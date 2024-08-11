import { ButtonAddToCart } from 'src/components/ButtonAddToCart'
import styles from './CartItem.module.scss'
import { QuantityControls } from 'src/components/QuantityControls'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  price: number
  imageUrl: string
  quantity: number
  onAdd: (id: number) => void
  onRemove: (id: number) => void
  onDelete: (id: number) => void
}

export const CartItem = ({
  id,
  title,
  price,
  imageUrl,
  quantity,
  onAdd,
  onRemove,
  onDelete,
}: Props): JSX.Element => {
  return (
    <div className={styles.cartItem}>
      <div className={`${styles.details} ${!quantity ? styles.faded : ''}`}>
        <img src={imageUrl} alt={title} className={styles.image} />

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
            id={id}
            quantity={quantity}
            onAdd={onAdd}
            onRemove={onRemove}
          />

          <button onClick={() => onDelete(id)} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      ) : (
        <ButtonAddToCart
          className={styles.addToCartButton}
          onClick={(e) => {
            e.stopPropagation()
            onAdd(id)
          }}
        />
      )}
    </div>
  )
}
