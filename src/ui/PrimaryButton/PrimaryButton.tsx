import { ButtonHTMLAttributes, ReactNode } from "react"

import styles from "./PrimaryButton.module.scss"

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const PrimaryButton = ({
  children,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <button className={`${styles.primaryButton} ${className}`} {...props}>
      {children}
    </button>
  )
}
