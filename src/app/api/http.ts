import { apiInstance } from './api'

export const get = async <T extends object>(
  endpoint: string,
  parameters?: object,
): Promise<T> => {
  const response = await apiInstance.get<T>(endpoint, {
    params: parameters,
  })
  return response.data as T
}

export const post = async <T extends object>(
  endpoint: string,
  data: unknown,
): Promise<T> => {
  const response = await apiInstance.post<T>(endpoint, data)
  return response.data as T
}

export const put = async <T extends object>(
  endpoint: string,
  data: unknown,
): Promise<T> => {
  const response = await apiInstance.put<T>(endpoint, data)
  return response.data as T
}

export const remove = async (
  endpoint: string,
  parameters?: object,
): Promise<void> => {
  await apiInstance.delete(endpoint, {
    params: parameters,
  })
}

export const http = {
  get,
  post,
  put,
  remove,
}

