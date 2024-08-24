import { useProductSearch } from "src/app/hooks"
import { ErrorDisplay } from "src/components/ErrorDisplay"
import { ProductList } from "src/components/ProductList"
import { SkeletonCatalogSection } from "src/components/Skeletons"
import { Button } from "src/ui/Button"
import { Input } from "src/ui/Input"

import styles from "./CatalogSection.module.scss"

export const CatalogSection = (): JSX.Element => {
  const {
    products,
    isLoading,
    error,
    handleQueryChange,
    handleShowMore,
    hasMoreProducts,
    refetch,
  } = useProductSearch({ limit: 12, debounceDelay: 2000 })

  console.log(products)

  if (isLoading) {
    return <SkeletonCatalogSection />
  }

  if (error) {
    return (
      <ErrorDisplay
        message="Failed to load catalog. Please try again."
        onRetry={refetch}
      />
    )
  }

  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>Catalog</h2>

        <form className={styles.search}>
          <label htmlFor="search-input"></label>

          <Input
            id="search-input"
            type="text"
            placeholder="Search by title"
            onChange={(e) => handleQueryChange(e.target.value)}
            className={styles.input}
          />
        </form>

        <ProductList items={products} />

        {hasMoreProducts && !isLoading && (
          <Button onClick={handleShowMore} aria-label="Show more products">
            Show more
          </Button>
        )}
      </div>
    </section>
  )
}
