import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './SquareButton.module.scss'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const SquareButton = ({
  children,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <button className={`${styles.squareButton} ${className}`} {...props}>
      {children}
    </button>
  )
}
