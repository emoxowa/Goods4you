import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { RouterPaths } from 'src/routing/routerPaths'
import icon from 'src/assets/images/svg/cart.svg'

type Props = {
  type: 'header' | 'footer'
  cartItemCount?: number
}

export const Navigation = React.memo(({ type, cartItemCount = 0 }: Props): JSX.Element => {
  console.log('Rendering Navigation component')
  return (
    <nav className={`${styles.navigation} ${styles[type]}`}>
      <ul className={styles.links}>
        <li>
          <Link to="/#catalog" className={styles.navLink}>
            Catalog
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/#faq" className={styles.navLink}>
            FAQ
          </Link>
        </li>
        {type === 'header' && (
          <li>
            <Link to={RouterPaths.CART} className={styles.navLink}>
              <span>Cart</span>
              <img src={icon} alt="Cart icon" className={styles.icon} />
              {cartItemCount > 0 && (
                <span className={styles.cartItemCount}>{cartItemCount}</span>
              )}
            </Link>
          </li>
        )}
        {type === 'header' && <li>Johnson Smith</li>}
      </ul>
    </nav>
  )
})
