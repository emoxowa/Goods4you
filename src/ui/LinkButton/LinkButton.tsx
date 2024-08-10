import { Link } from 'react-router-dom'
import styles from './LinkButton.module.scss'

type LinkButtonProps = {
  text: string
  to: string
  onClick?: () => void
}

export const LinkButton = ({ text, to, onClick }: LinkButtonProps): JSX.Element => {
  return (
    <Link to={to} className={styles.linkButton} onClick={onClick}>
      {text}
    </Link>
  )
}
