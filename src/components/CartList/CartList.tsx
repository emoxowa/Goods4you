import styles from './CartList.module.scss'
import { CartItem } from 'src/components/CartItem'

type Props = {
  items: {
    id: number
    title: string
    price: number
    imageUrl: string
    quantity: number
  }[]
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const CartList = ({ items, onAdd, onRemove }: Props): JSX.Element => {
  return (
    <div className={styles.cartList}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
