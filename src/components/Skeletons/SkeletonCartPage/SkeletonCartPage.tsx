import { Skeleton } from "src/ui/Skeleton"

import styles from "./SkeletonCartPage.module.scss"

export const SkeletonCartPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <Skeleton width="20%" height="40px" />
      </h1>

      <div className={styles.cartContent}>
        <section className={styles.cartList}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={styles.cartItem}>
              <Skeleton width="100px" height="100px" borderRadius="4px" />
              <div className={styles.itemDetails}>
                <Skeleton width="70%" height="20px" />
                <Skeleton width="30%" height="20px" />
              </div>
              <div className={styles.itemControls}>
                <Skeleton width="50px" height="20px" />
                <Skeleton width="80px" height="20px" />
              </div>
            </div>
          ))}
        </section>

        <section className={styles.cartSummary}>
          <Skeleton width="100%" height="20px" />
          <Skeleton width="100%" height="20px" />
          <Skeleton width="100%" height="20px" />
        </section>
      </div>
    </div>
  )
}
