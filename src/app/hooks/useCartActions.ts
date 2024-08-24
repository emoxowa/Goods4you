import { useCallback, useState } from "react"
import { useNotification } from "src/app/hooks"
import { useAppDispatch } from "src/app/store"
import { Product } from "src/app/store/api/types"
import {
  removeProductFromRemoved,
  updateCart,
} from "src/app/store/slices/cartSlice"
import { addRemovedProduct } from "src/app/store/slices/cartSlice"
import { CartProduct, UpdatedData } from "src/app/store/slices/cartSlice/types"

export const useCartActions = (cartId: number) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { showNotification } = useNotification()

  const addProductToCart = useCallback(
    (productId: number, quantity: number) => {
      setIsLoading(true)
      const newQuantity = quantity + 1
      const data: UpdatedData = { cartId, productId, quantity: newQuantity }

      Promise.all([
        dispatch(updateCart(data)).unwrap(),
        dispatch(removeProductFromRemoved(productId)),
      ])
        .catch(() => showNotification("error", "Failed to add product to cart"))
        .finally(() => setIsLoading(false))
    },
    [dispatch, cartId],
  )

  const removeProductFromCart = useCallback(
    (product: Product | CartProduct, quantity: number) => {
      setIsLoading(true)
      if (quantity === 1) {
        deleteProductFromCart(product)
      } else {
        const newQuantity = Math.max(quantity - 1, 0)
        const data: UpdatedData = {
          cartId,
          productId: product.id,
          quantity: newQuantity,
        }

        dispatch(updateCart(data)).unwrap()
          .catch(() =>
            showNotification("error", "Failed to remove product from cart"),
          )
          .finally(() => setIsLoading(false))
      }
    },
    [dispatch, cartId],
  )

  const deleteProductFromCart = useCallback(
    (product: Product | CartProduct) => {
      setIsLoading(true)
      const data: UpdatedData = { cartId, productId: product.id, quantity: 0 }

      Promise.all([
        dispatch(updateCart(data)).unwrap(),
        dispatch(addRemovedProduct({ ...product, quantity: 0 })),
      ])
        .catch(() =>
          showNotification("error", "Failed to delete product from cart"),
        )
        .finally(() => setIsLoading(false))
    },
    [dispatch, cartId],
  )

  return {
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart,
    isLoading,
  }
}
