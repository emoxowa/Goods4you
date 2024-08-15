import { Link } from "react-router-dom"
import { RouterPaths } from "src/routing/routerPaths"

import styles from "./Logo.module.scss"

type Props = {
  onClick?: () => void
}
export const Logo = ({ onClick }: Props): JSX.Element => {
  return (
    <Link to={RouterPaths.MAIN} className={styles.logo} onClick={onClick}>
      Goods4you
    </Link>
  )
}
