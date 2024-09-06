import { Skeleton } from "src/ui/Skeleton"

import styles from "./SkeletonCatalogSection.module.scss"

export const SkeletonCatalogSection = (): JSX.Element => {
  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.wrapper}>
        <Skeleton width="30%" height="40px" borderRadius="4px" />{" "}

        <Skeleton width="100%" height="40px" borderRadius="4px" />{" "}

        <div className={styles.productList} role="list">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className={styles.skeletonProductItem}>
              <Skeleton width="100%" height="200px" borderRadius="4px" />{" "}
              <Skeleton width="70%" height="20px" borderRadius="4px" />{" "}
              <Skeleton width="30%" height="20px" borderRadius="4px" />{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
