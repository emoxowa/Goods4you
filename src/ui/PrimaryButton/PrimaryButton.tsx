import styles from './PrimaryButton.module.scss'

type Props = {
  text: string
  onClick: () => void
}

export const PrimaryButton = ({ text, onClick }: Props): JSX.Element => {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {text}
    </button>
  )
}
