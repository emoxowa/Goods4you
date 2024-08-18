import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_PATHS, BASE_API_URL } from "src/app/api"

import { Product, Products } from "./types"

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getProductById: builder.query<Product, number>({
      query: (id) => `${API_PATHS.PRODUCTS}/${id}`,
    }),
    searchProducts: builder.query<
      Products,
      { q: string; limit: number; skip: number }
    >({
      query: ({ q, limit, skip }) =>
        `${API_PATHS.PRODUCTS}/search?q=${q}&limit=${limit}&skip=${skip}`,
    }),
  }),
})

export const { useGetProductByIdQuery, useSearchProductsQuery } = productApi
