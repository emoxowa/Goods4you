import { useLocation } from "react-router-dom"
import { RouterPaths } from "src/app/routing"
import { useAppSelector } from "src/app/store"
import { useGetCurrentUserQuery } from "src/app/store/api/authApi"
import { totalQuantitySelector } from "src/app/store/slices/cartSlice"
import { Navigation } from "src/components/Navigation"
import { Logo } from "src/ui/Logo"

import styles from "./Header.module.scss"

export const Header = (): JSX.Element => {
  const totalQuantity = useAppSelector(totalQuantitySelector)
  const location = useLocation()
  const { data: user } = useGetCurrentUserQuery()

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        {location.pathname !== RouterPaths.AUTH && (
          <Navigation
            type="header"
            totalQuantity={totalQuantity}
            userName={user ? `${user.firstName} ${user.lastName}` : ""}
          />
        )}
      </div>
    </header>
  )
}
