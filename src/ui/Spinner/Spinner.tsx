import styles from "./Spinner.module.scss"

export const Spinner = (): JSX.Element => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  )
}
