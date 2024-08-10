import styles from './SquareButton.module.scss'

type Props = {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export const SquareButton = ({
  onClick,
  children,
  className,
}: Props): JSX.Element => {
  return (
    <button className={`${styles.squareButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
