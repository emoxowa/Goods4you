import { AboutSection } from 'src/components/AboutSection'
import { CatalogSection } from 'src/components/CatalogSection'
import { FaqSection } from 'src/components/FaqSection'
import { Helmet } from 'react-helmet-async'

export const CatalogPage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <AboutSection />
      <CatalogSection />
      <FaqSection />
    </>
  )
}
