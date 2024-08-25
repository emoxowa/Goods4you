import { describe, expect, it } from "vitest"

import { getAvailabilityText } from "./getAvailabilityText"

describe("getAvailabilityText", () => {
  it("should return correct text when stock is greater than 0", () => {
    const stock = 5
    const status = "In Stock"
    const result = getAvailabilityText(stock, status)
    expect(result).toBe("In Stock - Only 5 left!")
  })

  it("should return only the availability status when stock is 0", () => {
    const stock = 0
    const status = "Out of Stock"
    const result = getAvailabilityText(stock, status)
    expect(result).toBe("Out of Stock")
  })
})
