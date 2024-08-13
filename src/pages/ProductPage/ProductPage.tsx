import { Helmet } from "react-helmet-async"
import { product } from "src/assets/data/product"
import { PriceInfo } from "src/components/PriceInfo"
import { ProductGallery } from "src/components/ProductGallery"
import { Rating } from "src/components/Rating"

import styles from "./ProductPage.module.scss"

export const ProductPage = (): JSX.Element => {
  const handleAdd = (): void => {}
  const handleRemove = (): void => {}

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{product.title} | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <section>
        <h2 className={styles.hidden}>Product Gallery</h2>
        <ProductGallery images={product.images} />
      </section>

      <section className={styles.productDescription}>
        <h1 className={styles.title}>{product.title}</h1>

        <div className={styles.wrapper}>
          <Rating rating={product.rating} />
          <div className={styles.tags}>{product.tags.join(", ")}</div>
        </div>

        <div className={styles.availability}>{product.availabilityStatus}</div>

        <p className={styles.description}>{product.description}</p>

        <p className={styles.warranty}>{product.warrantyInformation}</p>

        <p className={styles.shipping}>{product.shippingInformation}</p>

        <PriceInfo
          price={product.price}
          discountPercentage={product.discountPercentage}
          discountTotal={product.discountTotal}
          onAdd={handleAdd}
          onRemove={handleRemove}
          quantity={0}
        />
      </section>
    </div>
  )
}
