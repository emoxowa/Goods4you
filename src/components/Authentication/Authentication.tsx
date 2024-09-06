import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TOKENS } from "src/app/api"
import { RouterPaths } from "src/app/routing"
import { useLoginMutation } from "src/app/store/api/authApi"
import { Button } from "src/ui/Button"
import { Input } from "src/ui/Input"

import styles from "./Authentication.module.scss"

export const Authentication = (): JSX.Element => {
  const [username, setUsername] = useState("williamg")
  const [password, setPassword] = useState("williamgpass")
  const [error, setError] = useState<string | null>(null)
  const [login, { isLoading: isLoginLoading }] = useLoginMutation()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password) {
      setError("Both fields are required.")
      return
    }

    try {
      const authData = await login({
        username,
        password,
        expiresInMins: 30,
      }).unwrap()
      if (authData) {
        localStorage.setItem(TOKENS.ACCESS_TOKEN, authData.token)
        navigate(RouterPaths.MAIN)
      }
    } catch (err) {
      console.error("Failed to login:", err)
      setError("Login failed. Please try again.")
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign in</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Login"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            setError(null)
          }}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError(null)
          }}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button
          type="submit"
          className={styles.button}
          disabled={isLoginLoading}
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}
