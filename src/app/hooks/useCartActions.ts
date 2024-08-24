import { useCallback, useState } from "react"
import { useAppDispatch } from "src/app/store"
import { updateCartByCartId } from "src/app/store/slices/cartSlice"
import { UpdatedData } from "src/app/store/slices/cartSlice/types"

export const useCartActions = (cartId: number) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const addProductToCart = useCallback(
    async (productId: number, quantity: number) => {
      try {
        setIsLoading(true)
        const newQuantity = quantity + 1
        const data: UpdatedData = { cartId, productId, quantity: newQuantity }
        await dispatch(updateCartByCartId(data))
      } finally {
        setIsLoading(false)
      }
    },
    [dispatch, cartId],
  )

  const removeProductFromCart = useCallback(
    async (productId: number, quantity: number) => {
      try {
        setIsLoading(true)
        const newQuantity = Math.max(quantity - 1, 0)
        const data: UpdatedData = { cartId, productId, quantity: newQuantity }
        await dispatch(updateCartByCartId(data))
      } finally {
        setIsLoading(false)
      }
    },
    [dispatch, cartId],
  )

  const deleteProductFromCart = useCallback(
    async (productId: number) => {
      try {
        setIsLoading(true)
        const data: UpdatedData = { cartId, productId, quantity: 0 }
        await dispatch(updateCartByCartId(data))
      } finally {
        setIsLoading(false)
      }
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
