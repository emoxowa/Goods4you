import styles from './Footer.module.scss'
import { Logo } from 'src/ui/Logo'
import { Navigation } from 'src/components/Navigation'
import { useNavigationAndScroll } from 'src/hooks'

export const Footer = (): JSX.Element => {
  const { scrollToTop } = useNavigationAndScroll()

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Logo onClick={() => scrollToTop()} />
        <Navigation type="footer" />
      </div>
    </footer>
  )
}
