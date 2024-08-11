export const calculateTotalPrice = (
  price: number,
  discount: number,
): number => {
  const discountAmount = (price * discount) / 100
  return price - discountAmount
}
