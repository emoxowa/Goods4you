import { memo } from 'react'
import styles from './ProductList.module.scss'
import { ProductItem } from 'src/components/ProductItem'

type Props = {
  items: {
    id: number
    title: string
    price: number
    imageUrl: string
    quantity: number
  }[]
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const ProductList = memo(({ items, onAdd, onRemove }: Props): JSX.Element => {
  return (
    <div className={styles.productList} role="list">
      {items.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
})
