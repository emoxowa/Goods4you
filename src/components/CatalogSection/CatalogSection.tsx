import { useState } from 'react'
import styles from './CatalogSection.module.scss'
import { CartList } from 'src/components/CartList'
import { PrimaryButton } from 'src/ui/PrimaryButton'
import { products } from 'src/assets/data/data.ts'

export const CatalogSection = (): JSX.Element => {
  const [visibleItems, setVisibleItems] = useState(12)

  const visibleProducts = products.slice(0, visibleItems)

  const handleAddToCart = () => {}
  const handleRemoveFromCart = () => {}

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6)
  }

  return (
    <section className={styles.catalog} id-="catalog">
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>Catalog</h2>

        <form action="" className={styles.search}>
          <label htmlFor="search-input"></label>
          <input
            id="search-input"
            type="text"
            placeholder="Search by title"
            onChange={() => {}}
            className={styles.input}
          />
        </form>

        <CartList
          items={visibleProducts}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />

        {visibleItems < products.length && (
          <PrimaryButton onClick={handleShowMore}>Show more</PrimaryButton>
        )}
      </div>
    </section>
  )
}
