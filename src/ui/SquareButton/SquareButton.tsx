import { ButtonHTMLAttributes, ReactNode } from "react"

import styles from "./SquareButton.module.scss"

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className: string
  size?: "small" | "medium"
}

export const SquareButton = ({
  children,
  className,
  size = "small",
  ...props
}: Props): JSX.Element => {
  return (
    <button
      className={`${styles.squareButton} ${styles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
