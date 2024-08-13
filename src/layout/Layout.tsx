import { Outlet } from "react-router-dom"
import { Footer } from "src/components/Footer"
import { Header } from "src/components/Header"

import styles from "./Layout.module.scss"

export const Layout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
