import { useCallback } from "react"
import { useAppDispatch } from "src/app/store"
import { updateCartByCartId } from "src/app/store/slices/cartSlice"
import { UpdatedData } from "src/app/store/slices/cartSlice/types"

export const useCartActions = (cartId: number) => {
  const dispatch = useAppDispatch()

  const addProductToCart = useCallback(
    (productId: number, quantity: number) => {
      const newQuantity = quantity + 1
      const data: UpdatedData = { cartId, productId, quantity: newQuantity }
      dispatch(updateCartByCartId(data))
    },
    [dispatch, cartId],
  )

  const removeProductFromCart = useCallback(
    (productId: number, quantity: number) => {
      const newQuantity = Math.max(quantity - 1, 0)
      const data: UpdatedData = { cartId, productId, quantity: newQuantity }
      dispatch(updateCartByCartId(data))
    },
    [dispatch, cartId],
  )

  const deleteProductFromCart = useCallback(
    (productId: number) => {
      const data: UpdatedData = { cartId, productId, quantity: 0 }
      dispatch(updateCartByCartId(data))
    },
    [dispatch, cartId],
  )

  return {
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart,
  }
}
