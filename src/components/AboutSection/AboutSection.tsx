import styles from './AboutSection.module.scss'
import { LinkButton } from 'src/ui/LinkButton'

export const AboutSection = (): JSX.Element => {
  return (
    <section className={styles.about}>
      <div className={styles.wrapper}>
        <hr className={styles.divider} />
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
  )
}
