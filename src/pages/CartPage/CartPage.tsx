import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "src/app/store"
import { cartSelector, fetchCartByUserId } from "src/app/store/slices"
import { CartList } from "src/components/CartList"
import { CartSummary } from "src/components/CartSummary"
import { ErrorDisplay } from "src/components/ErrorDisplay"
import { SkeletonCartPage } from "src/components/Skeletons"

import styles from "./CartPage.module.scss"
export const CartPage = (): JSX.Element => {
  const cart = useAppSelector(cartSelector)
  const dispatch = useAppDispatch()

  const handleAdd = (): void => {}
  const handleRemove = (): void => {}
  const handleDelete = (): void => {}

  const handleRetry = () => {
    dispatch(fetchCartByUserId(15))
  }

  if (cart.status === "error") {
    return (
      <ErrorDisplay
        message="Failed to load your cart. Please try again."
        onRetry={handleRetry}
      />
    )
  }

  if (cart.status === "loading") {
    return <SkeletonCartPage />
  }

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

        {!cart.response || cart.response?.products.length === 0 ? (
          <p className={styles.empty}>No items</p>
        ) : (
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
        )}
      </div>
    </>
  )
}
