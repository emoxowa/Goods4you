import { InputHTMLAttributes } from "react"

import styles from "./Input.module.scss"

export const Input = (
  props: InputHTMLAttributes<HTMLInputElement>,
): JSX.Element => {
  return <input className={styles.input} {...props} />
}
