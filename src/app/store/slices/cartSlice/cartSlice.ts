import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_PATHS, http, InitialState, StateFromApi } from "src/app/api"
import { RootState } from "src/app/store"

import { Cart, UpdatedData } from "./types"

export const fetchCartByUserId = createAsyncThunk(
  "cart/fetchCartByUserId",
  async (userId: number) => {
    const response = await http.get<{ carts: Cart[] }>(
      `${API_PATHS.CARTS}/user/${userId}`,
    )
    return response.carts[0]
  },
)

export const updateCartByCartId = createAsyncThunk(
  "cart/updateCartByCartId",
  async ({ cartId, productId, quantity }: UpdatedData, { getState }) => {
    const state = getState() as RootState
    const cart = state.cart.response

    if (!cart) {
      throw new Error("Cart not found")
    }


    const updatedProducts = cart.products
      .map((product) =>
        product.id === productId ? { ...product, quantity } : product,
      )
      .filter((product) => product.quantity > 0)

    const response = await http.put<Cart>(`${API_PATHS.CARTS}/${cartId}`, {
      merge: false,
      products: updatedProducts,
    })

    return response
  },
)

const cartSlice = createSlice({
  name: "cart",
  initialState: InitialState as StateFromApi<Cart>,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartByUserId.pending, (state) => {
        state.status = "loading"
        state.response = undefined
      })
      .addCase(fetchCartByUserId.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.response = action.payload
      })
      .addCase(fetchCartByUserId.rejected, (state) => {
        state.status = "error"
        state.response = undefined
      })
      .addCase(updateCartByCartId.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateCartByCartId.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.response = action.payload
      })
      .addCase(updateCartByCartId.rejected, (state) => {
        state.status = "error"
      })
  },
})

export const cart = cartSlice.reducer
export const cartSelector = (state: RootState) => state.cart
export const totalQuantitySelector = (state: RootState) =>
  state.cart.response?.totalQuantity ?? 0
