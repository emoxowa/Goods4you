import { Link } from "react-router-dom"
import { useCartActions } from "src/app/hooks/useCartActions"
import { Product } from "src/app/store/api/productApi/types"
import { ButtonAddToCart } from "src/components/ButtonAddToCart"
import { QuantityControls } from "src/components/QuantityControls"

import styles from "./ProductItem.module.scss"

type Props = {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
  cartId: number
  product: Product
}

export const ProductItem = ({
  id,
  title,
  price,
  thumbnail,
  quantity,
  cartId,
  product,
}: Props): JSX.Element => {
  const { addProductToCart, removeProductFromCart, isLoading } =
    useCartActions(cartId)

  const isAddButtonDisabled = quantity >= product.stock

  return (
    <Link to={`/product/${id}`} className={styles.productItem}>
      <div className={styles.imageWrapper}>
        <img src={thumbnail} alt={title} className={styles.image} />
      </div>

      <div className={styles.details}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}>${price}</p>
        </div>

        {quantity > 0 ? (
          <QuantityControls
            quantity={quantity}
            onAdd={() => addProductToCart(id, quantity)}
            onRemove={() => removeProductFromCart(product, quantity)}
            isLoading={isLoading}
            isAddButtonDisabled={isAddButtonDisabled}
          />
        ) : (
          <ButtonAddToCart
            isLoading={isLoading}
            isAddButtonDisabled={isAddButtonDisabled}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addProductToCart(id, quantity)
            }}
          />
        )}
      </div>
    </Link>
  )
}
