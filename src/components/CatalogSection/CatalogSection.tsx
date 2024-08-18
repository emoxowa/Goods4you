import { useCallback} from "react"
import { useProductSearch } from "src/app/hooks"
import { ProductList } from "src/components/ProductList"
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
  } = useProductSearch({ limit: 12, debounceDelay: 2000 })

  const handleAddToCart = useCallback(() => {}, [])

  const handleRemoveFromCart = useCallback(() => {}, [])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading products</p>

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

        <ProductList
          items={products}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />

        {hasMoreProducts && (
          <Button onClick={handleShowMore} aria-label="Show more products">
            Show more
          </Button>
        )}
      </div>
    </section>
  )
}
