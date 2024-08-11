import { AboutSection } from 'src/components/AboutSection'
import { CatalogSection } from 'src/components/CatalogSection'
import { FaqSection } from 'src/components/FaqSection'

export const CatalogPage = (): JSX.Element => {
  return (
    <>
      <AboutSection />
      <CatalogSection />
      <FaqSection />
    </>
  )
}
