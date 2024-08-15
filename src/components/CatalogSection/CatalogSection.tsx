import { useState } from "react"
import { products } from "src/assets/data/products"
import { ProductList } from "src/components/ProductList"
import { Button } from "src/ui/Button"
import { Input } from "src/ui/Input"

import styles from "./CatalogSection.module.scss"

export const CatalogSection = (): JSX.Element => {
  const [visibleItems, setVisibleItems] = useState(12)

  const visibleProducts = products.slice(0, visibleItems)

  const handleAddToCart = () => {}

  const handleRemoveFromCart = () => {}

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6)
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
            onChange={() => {}}
            className={styles.input}
          />
        </form>

        <ProductList
          items={visibleProducts}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />

        {visibleItems < products.length && (
          <Button onClick={handleShowMore} aria-label="Show more products">
            Show more
          </Button>
        )}
      </div>
    </section>
  )
}
