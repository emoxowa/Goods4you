import { useCallback, useState } from "react"
import { useAppDispatch } from "src/app/store"
import { updateCart } from "src/app/store/slices/cartSlice"
import { addRemovedProduct } from "src/app/store/slices/cartSlice"
import { CartProduct, UpdatedData } from "src/app/store/slices/cartSlice/types"

export const useCartActions = (cartId: number) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const addProductToCart = useCallback(
    (productId: number, quantity: number) => {
      setIsLoading(true)
      const newQuantity = quantity + 1
      const data: UpdatedData = { cartId, productId, quantity: newQuantity }

      dispatch(updateCart(data)).finally(() => setIsLoading(false))
    },
    [dispatch, cartId],
  )

  const removeProductFromCart = useCallback(
    (productId: number, quantity: number) => {
      setIsLoading(true)
      const newQuantity = Math.max(quantity - 1, 0)
      const data: UpdatedData = { cartId, productId, quantity: newQuantity }

      dispatch(updateCart(data)).finally(() => setIsLoading(false))
    },
    [dispatch, cartId],
  )

  const deleteProductFromCart = useCallback(
    (product: CartProduct) => {
      setIsLoading(true)
      const data: UpdatedData = { cartId, productId: product.id, quantity: 0 }

      Promise.all([
        dispatch(updateCart(data)).unwrap(),
        dispatch(addRemovedProduct({ ...product, quantity: 0 })),
      ]).finally(() => setIsLoading(false))
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
