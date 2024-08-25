import { Authentication } from "src/components/Authentication"
import { Header } from "src/components/Header"

import styles from "./AuthPage.module.scss"

export const AuthPage = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Authentication />
      </main>
    </div>
  )
}
