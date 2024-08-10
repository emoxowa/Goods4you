import { SquareButton } from 'src/ui/SquareButton'
import styles from './CartItem.module.scss'
import { ButtonAddToCart } from 'src/components/ButtonAddToCart'

type Props = {
  id: number
  title: string
  price: number
  imageUrl: string
  quantity: number
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const CartItem = ({
  id,
  title,
  price,
  imageUrl,
  quantity,
  onAdd,
  onRemove,
}: Props): JSX.Element => {
  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt={title} className={styles.image} />
      
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}>${price}</p>
        </div>

        {quantity > 0 ? (
          <div className={styles.controls}>
            <SquareButton
              onClick={() => onRemove(id)}
              className={styles.button}
            >
              <p className={styles.buttonText}>-</p>
            </SquareButton>

            <span className={styles.quantity}>
              {quantity} {quantity === 1 ? 'item' : 'items'}
            </span>

            <SquareButton onClick={() => onAdd(id)} className={styles.button}>
              <p className={styles.buttonText}>+</p>
            </SquareButton>
          </div>
        ) : (
          <ButtonAddToCart onClick={() => onAdd(id)} />
        )}
      </div>
    </div>
  )
}
