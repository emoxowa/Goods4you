import { Navigation } from 'src/components/Navigation'
import styles from './Header.module.scss'
import { Logo } from 'src/ui/Logo'

export const Header = (): JSX.Element => {
  console.log('Rendering Header component')
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Navigation type="header" cartItemCount={1} />
      </div>
    </header>
  )
}
