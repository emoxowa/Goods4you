import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import { useAppSelector } from "src/app/store"
import { useGetProductByIdQuery } from "src/app/store/api"
import { cartSelector } from "src/app/store/slices/cartSlice/cartSlice"
import { getAvailabilityText } from "src/app/utils/getAvailabilityText"
import { PriceInfo } from "src/components/PriceInfo"
import { ProductGallery } from "src/components/ProductGallery"
import { Rating } from "src/components/Rating"
import { SkeletonProductPage } from "src/components/Skeletons"

import styles from "./ProductPage.module.scss"

export const ProductPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { data: product, error, isLoading } = useGetProductByIdQuery(Number(id))
  const cart = useAppSelector(cartSelector)

  const quantity =
    cart.response?.products.find((p) => p.id === Number(id))?.quantity ?? 0

  const handleAdd = (): void => {}
  const handleRemove = (): void => {}

  if (isLoading) {
    return <SkeletonProductPage />
  }
  
  if (error || !product) {
    return <p>Error loading product details.</p>
  }

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

        <div className={styles.availability}>
          {getAvailabilityText(product.stock, product.availabilityStatus)}
        </div>

        <p className={styles.description}>{product.description}</p>

        <p className={styles.warranty}>{product.warrantyInformation}</p>

        <p className={styles.shipping}>{product.shippingInformation}</p>

        <PriceInfo
          id={product.id}
          price={product.price}
          discountPercentage={product.discountPercentage}
          onAdd={handleAdd}
          onRemove={handleRemove}
          quantity={quantity}
        />
      </section>
    </div>
  )
}
