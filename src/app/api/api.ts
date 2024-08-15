import axios from "axios"

import { BASE_API_URL } from "./constants"

export const apiInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})
