export const calculateDiscountedTotal = (
  price: number,
  discountPercentage: number,
): number => {
  return +(price - (price * discountPercentage) / 100).toFixed(2)
}
