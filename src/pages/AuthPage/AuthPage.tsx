import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TOKENS } from "src/app/api"
import { RouterPaths } from "src/app/routing"
import { Authentication } from "src/components/Authentication"
import { Header } from "src/components/Header"

import styles from "./AuthPage.module.scss"

export const AuthPage = (): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem(TOKENS.ACCESS_TOKEN)
    if (token) {
      navigate(RouterPaths.MAIN)
    }
  }, [navigate])

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Authentication />
      </main>
    </div>
  )
}
