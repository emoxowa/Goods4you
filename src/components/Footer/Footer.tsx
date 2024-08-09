import styles from './Footer.module.scss'
import { Logo } from 'src/ui/Logo'
import { Navigation } from 'src/components/Navigation'

export const Footer = (): JSX.Element => {
  console.log('Rendering Footer component')
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Logo />
        <Navigation type="footer" />
      </div>
    </footer>
  )
}
