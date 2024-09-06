export const getAvailabilityText = (
  stock: number,
  availabilityStatus: string,
): string => {
  return stock > 0
    ? `${availabilityStatus} - Only ${stock} left!`
    : availabilityStatus
}
