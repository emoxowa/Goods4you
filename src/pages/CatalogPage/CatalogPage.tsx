import styles from './CatalogPage.module.scss'
import { LinkButton } from 'src/ui/LinkButton'

export const CatalogPage = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <section className={styles.aboutSection}>
        <div className={styles.wrapper}>
          <hr className={styles.divider}></hr>
          <h1 className={styles.h1}>Goods4you</h1>
          <h2 className={styles.h2}>
            Any products from famous brands with worldwide delivery
          </h2>
          <p className={styles.description}>
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </p>
          <LinkButton text="Go to shopping" to="/#catalog" />
        </div>
      </section>
    </main>
  )
}
