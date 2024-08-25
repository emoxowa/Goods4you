import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_PATHS, BASE_API_URL, TOKENS } from "src/app/api"

import { AuthResponse, LoginRequest, User } from "./types"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(TOKENS.ACCESS_TOKEN)
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: `${API_PATHS.AUTH}${API_PATHS.LOGIN}`,
        method: "POST",
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query<User, void>({
      query: () => ({
        url: `${API_PATHS.AUTH}/me`,
      }),
    }),
  }),
})

export const { useLoginMutation, useGetCurrentUserQuery } = authApi
