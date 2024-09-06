import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { CartSummary } from "./CartSummary"

describe("CartSummary component", () => {
  it("renders correctly with multiple items", () => {
    render(<CartSummary count={3} price={150} totalPrice={120} />)

    expect(screen.getByText("3 items")).toBeInTheDocument()

    expect(screen.getByText("$150.00")).toBeInTheDocument()

    expect(screen.getByText("$120")).toBeInTheDocument()
  })

  it("renders correctly with a single item", () => {
    render(<CartSummary count={1} price={50} totalPrice={45} />)

    expect(screen.getByText("1 item")).toBeInTheDocument()

    expect(screen.getByText("$50.00")).toBeInTheDocument()

    expect(screen.getByText("$45")).toBeInTheDocument()
  })
})
