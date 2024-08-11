import styles from './CartSummary.module.scss'

type Props = {
  count: number
  price: number
  totalPrice: number
}

export const CartSummary = ({ count, price, totalPrice }: Props): JSX.Element => {
  return (
    <>
      <div className={styles.row}>
        <h3 className={styles.label}>Total count</h3>
        <span className={styles.count}>
          {count} {count === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className={styles.row}>
        <h4 className={styles.label}>Price without discount</h4>
        <span className={styles.price}>${price}</span>
      </div>

      <hr />

      <div className={`${styles.row} ${styles.total}`}>
        <h5 className={styles.label}>Total price</h5>
        <span className={styles.totalPrice}>${totalPrice}</span>
      </div>
    </>
  )
}
