import styles from "./Skeleton.module.scss"

type SkeletonProps = {
  width?: string | number
  height?: string | number
  borderRadius?: string
}

export const Skeleton = ({
  width = "100%",
  height = "16px",
  borderRadius = "4px",
}: SkeletonProps): JSX.Element => {
  return (
    <div className={styles.skeleton} style={{ width, height, borderRadius }} />
  )
}
