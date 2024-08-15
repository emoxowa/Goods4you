import { Helmet } from "react-helmet-async"
import { calculateTotalPrice } from "src/app/utils/calculateTotalPrice"
import { cartItems } from "src/assets/data/cartItems"
import { CartList } from "src/components/CartList"
import { CartSummary } from "src/components/CartSummary"

import styles from "./CartPage.module.scss"
export const CartPage = (): JSX.Element => {
  const handleAdd = (): void => {}
  const handleRemove = (): void => {}
  const handleDelete = (): void => {}

  const totalPrice = calculateTotalPrice(700, 15)

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.h1}>My cart</h1>

        <div className={styles.cartContent}>
          <section className={styles.cartList}>
            <CartList
              items={cartItems}
              onAdd={handleAdd}
              onRemove={handleRemove}
              onDelete={handleDelete}
            />
          </section>

          <section>
            <CartSummary count={3} price={700} totalPrice={totalPrice} />
          </section>
        </div>
      </div>
    </>
  )
}
