export type CartProduct = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedTotal: number
  thumbnail: string
}

export type Cart = {
  id: number
  products: CartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export type UpdatedData = {
  cartId: number
  productId: number
  quantity: number
}