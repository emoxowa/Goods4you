import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "src/app/store"
import { cartSelector, fetchCartByUserId } from "src/app/store/slices"
import { CartList } from "src/components/CartList"
import { CartSummary } from "src/components/CartSummary"

import styles from "./CartPage.module.scss"
export const CartPage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(cartSelector)

  useEffect(() => {
    dispatch(fetchCartByUserId(6))
  }, [dispatch])

  if (cart.status === "error") {
    return <p>Error</p>
  }

  if (cart.status === "loading") {
    return <p>loading</p>
  }

  const handleAdd = (): void => {}
  const handleRemove = (): void => {}
  const handleDelete = (): void => {}

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
              products={cart.response?.products ?? []}
              onAdd={handleAdd}
              onRemove={handleRemove}
              onDelete={handleDelete}
            />
          </section>

          <section>
            <CartSummary
              count={cart.response?.totalProducts ?? 0}
              price={cart.response?.total ?? 0}
              totalPrice={cart.response?.discountedTotal ?? 0}
            />
          </section>
        </div>
      </div>
    </>
  )
}
