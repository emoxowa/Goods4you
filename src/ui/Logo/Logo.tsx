import { Link } from "react-router-dom"

import styles from "./Logo.module.scss"

type Props = {
  onClick?: () => void
}
export const Logo = ({ onClick }: Props): JSX.Element => {
  return (
    <Link to="/" className={styles.logo} onClick={onClick}>
      Goods4you
    </Link>
  )
}
