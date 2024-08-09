import { Link } from 'react-router-dom'
import styles from './LinkButton.module.scss'

type LinkButtonProps = {
  text: string
  to: string
}

export const LinkButton = ({ text, to }: LinkButtonProps): JSX.Element => {
  return (
    <Link to={to} className={styles.linkButton}>
      {text}
    </Link>
  )
}
