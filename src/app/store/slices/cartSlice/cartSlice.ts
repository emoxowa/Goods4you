import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_PATHS, http, InitialState, StateFromApi } from "src/app/api"
import { RootState } from "src/app/store"

import { Cart } from "./types"

export const fetchCartByUserId = createAsyncThunk(
  "cart/fetchCartByUserId",
  async (userId: number) => {
    const response = await http.get<{ carts: Cart[] }>(
      `${API_PATHS.CARTS}/user/${userId}`,
    )
    return response.carts[0]
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
  },
})

export const cart = cartSlice.reducer
export const cartSelector = (state: RootState) => state.cart
export const totalQuantitySelector = (state: RootState) =>
  state.cart.response?.products.length ?? 0
