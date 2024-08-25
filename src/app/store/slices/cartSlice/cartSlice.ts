import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import { API_PATHS, http, InitialState, StateFromApi } from "src/app/api"
import { RootState } from "src/app/store"

import { Cart, CartProduct, UpdatedData } from "./types"

export const fetchCartByUserId = createAsyncThunk(
  "cart/fetchCartByUserId",
  async (userId: number) => {
    const response = await http.get<{ carts: Cart[] }>(
      `${API_PATHS.CARTS}/user/${userId}`,
    )
    return response.carts[0]
  },
)

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ cartId, productId, quantity }: UpdatedData, { getState }) => {
    const state = getState() as RootState
    const cart = state.cart.response

    if (!cart) {
      throw new Error("Cart not found")
    }

    const productExists = cart.products.some(
      (product) => product.id === productId,
    )

    const updatedProducts = productExists
      ? cart.products
          .map((product) =>
            product.id === productId
              ? { id: product.id, quantity }
              : { id: product.id, quantity: product.quantity },
          )
      : [...cart.products, { id: productId, quantity }]

    const response = await http.put<Cart>(`${API_PATHS.CARTS}/${cartId}`, {
      merge: false,
      products: updatedProducts.filter((product) => product.quantity > 0),
    })

    return response
  },
)

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    ...InitialState,
    removedProducts: [] as CartProduct[],
  } as StateFromApi<Cart> & { removedProducts: CartProduct[] },
  reducers: {
    addRemovedProduct: (state, action) => {
      state.removedProducts.push(action.payload)
    },
    removeProductFromRemoved: (state, action) => {
      state.removedProducts = state.removedProducts.filter(
        (product) => product.id !== action.payload,
      )
    },
  },
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
      .addCase(updateCart.fulfilled, (state, action) => {
        const removedProducts = current(state.removedProducts)

        state.status = "fulfilled"
        state.response = {
          ...action.payload,
          products: [...action.payload.products, ...removedProducts],
        }
      })
  },
})

export const cart = cartSlice.reducer
export const cartSelector = (state: RootState) => state.cart
export const totalQuantitySelector = (state: RootState) =>
  state.cart.response?.totalQuantity ?? 0
export const { addRemovedProduct, removeProductFromRemoved } = cartSlice.actions
