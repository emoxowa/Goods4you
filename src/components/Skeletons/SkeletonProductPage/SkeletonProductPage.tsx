import { Skeleton } from "src/ui/Skeleton"

import styles from "./SkeletonProductPage.module.scss"

export const SkeletonProductPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Skeleton width="100%" height="400px" />
      <div className={styles.productDescription}>
        <Skeleton width="60%" height="50px" />
        <Skeleton width="100%" height="30px" />
        <Skeleton width="30%" height="30px" />
        <Skeleton width="100%" height="100px" />
        <Skeleton width="20%" height="20px" />
        <Skeleton width="20%" height="20px" />
        <Skeleton width="100%" height="100px" />
      </div>
    </div>
  )
}
