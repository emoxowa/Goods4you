import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

export const Layout = (): JSX.Element => {
  console.log('Layout rendering')
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
