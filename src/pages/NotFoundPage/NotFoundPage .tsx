import { Link } from 'react-router-dom'
import styles from './NotFoundPage .module.scss'

export const NotFoundPage = (): JSX.Element => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.button}>
        Go to Homepage
      </Link>
    </main>
  )
}

export default NotFoundPage
