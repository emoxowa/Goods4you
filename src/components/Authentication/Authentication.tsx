import { Button } from "src/ui/Button"
import { Input } from "src/ui/Input"

import styles from "./Authentication.module.scss"

export const Authentication = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign in</h1>
      <form className={styles.form}>
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" className={styles.button}>
          Sign in
        </Button>
      </form>
    </div>
  )
}
