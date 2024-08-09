import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

export const Logo = (): JSX.Element => {
  return (
    <Link to="/" className={styles.logo}>
      Goods4you
    </Link>
  )
}
