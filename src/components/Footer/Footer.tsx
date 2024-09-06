import { useNavigationAndScroll } from "src/app/hooks"
import { Navigation } from "src/components/Navigation"
import { Logo } from "src/ui/Logo"

import styles from "./Footer.module.scss"

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
