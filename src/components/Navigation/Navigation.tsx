import React from "react"
import { Link } from "react-router-dom"
import { useNavigationAndScroll } from "src/app/hooks"
import { RouterPaths } from "src/app/routing/routerPaths"
import icon from "src/assets/images/svg/cart.svg"

import styles from "./Navigation.module.scss"
type Props = {
  type: "header" | "footer"
  totalQuantity?: number
  userName: string
}

export const Navigation = React.memo(
  ({ type, totalQuantity = 0, userName }: Props): JSX.Element => {
    const { handleNavigation } = useNavigationAndScroll()

    return (
      <nav className={`${styles.navigation} ${styles[type]}`}>
        <ul className={styles.links}>
          <li>
            <Link
              to="/#catalog"
              className={styles.navLink}
              onClick={() => handleNavigation("catalog")}
            >
              Catalog
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              to="/#faq"
              className={styles.navLink}
              onClick={() => handleNavigation("faq")}
            >
              FAQ
            </Link>
          </li>
          {type === "header" && (
            <li>
              <Link to={RouterPaths.CART} className={styles.navLink}>
                <span>Cart</span>
                <img src={icon} alt="Cart icon" className={styles.icon} />
                {totalQuantity > 0 && (
                  <span className={styles.totalQuantity}>{totalQuantity}</span>
                )}
              </Link>
            </li>
          )}
          {type === "header" && <li className={styles.link}>{userName}</li>}
        </ul>
      </nav>
    )
  },
)

Navigation.displayName = "Navigation"
