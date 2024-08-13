import { Navigation } from "src/components/Navigation"
import { Logo } from "src/ui/Logo"

import styles from "./Header.module.scss"

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Navigation type="header" cartItemCount={1} />
      </div>
    </header>
  )
}
