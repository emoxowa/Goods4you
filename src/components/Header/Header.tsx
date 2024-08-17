import { useAppSelector } from "src/app/store"
import { totalQuantitySelector } from "src/app/store/slices/cartSlice"
import { Navigation } from "src/components/Navigation"
import { Logo } from "src/ui/Logo"

import styles from "./Header.module.scss"

export const Header = (): JSX.Element => {
  const totalQuantity = useAppSelector(totalQuantitySelector)

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Navigation type="header" totalQuantity={totalQuantity} />
      </div>
    </header>
  )
}
