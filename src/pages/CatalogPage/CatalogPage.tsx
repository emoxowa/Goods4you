import { AboutSection } from 'src/components/AboutSection'
import styles from './CatalogPage.module.scss'
import { CatalogSection } from 'src/components/CatalogSection'
import { FaqSection } from 'src/components/FaqSection'

export const CatalogPage = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <AboutSection />
      <CatalogSection />
      <FaqSection />
    </main>
  )
}
