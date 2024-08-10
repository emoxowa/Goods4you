import styles from './PrimaryButton.module.scss'

type Props = {
  children: React.ReactNode
  onClick: () => void
}

export const PrimaryButton = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {children}
    </button>
  )
}
