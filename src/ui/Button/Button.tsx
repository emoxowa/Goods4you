import { ButtonHTMLAttributes, ReactNode } from "react"

import styles from "./Button.module.scss"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: "default" | "square"
  size?: "small" | "medium" 
}

export const Button = ({
  children,
  className = "",
  variant = "default",
  size = "medium",
  ...props
}: ButtonProps): JSX.Element => {
  const variantClass = styles[variant]
  const sizeClass = styles[size]

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
