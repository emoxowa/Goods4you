import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { QuantityControls } from "./QuantityControls"

describe("QuantityControls component", () => {
  const onAdd = vi.fn()
  const onRemove = vi.fn()

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders with default props and displays the correct quantity", () => {
    render(<QuantityControls quantity={3} onAdd={onAdd} onRemove={onRemove} />)

    expect(screen.getByText("3 items")).toBeInTheDocument()
    expect(screen.getByLabelText("Decrease quantity")).toBeInTheDocument()
    expect(screen.getByLabelText("Increase quantity")).toBeInTheDocument()
  })

  it("renders correctly with quantity equal to 1", () => {
    render(<QuantityControls quantity={1} onAdd={onAdd} onRemove={onRemove} />)

    expect(screen.getByText("1 item")).toBeInTheDocument()
  })

  it("calls onAdd when the increase button is clicked", () => {
    render(<QuantityControls quantity={3} onAdd={onAdd} onRemove={onRemove} />)

    const increaseButton = screen.getByLabelText("Increase quantity")
    fireEvent.click(increaseButton)

    expect(onAdd).toHaveBeenCalledTimes(1)
  })

  it("calls onRemove when the decrease button is clicked", () => {
    render(<QuantityControls quantity={3} onAdd={onAdd} onRemove={onRemove} />)

    const decreaseButton = screen.getByLabelText("Decrease quantity")
    fireEvent.click(decreaseButton)

    expect(onRemove).toHaveBeenCalledTimes(1)
  })

  it("disables buttons when isLoading is true", () => {
    render(
      <QuantityControls
        quantity={3}
        onAdd={onAdd}
        onRemove={onRemove}
        isLoading={true}
      />,
    )

    const increaseButton = screen.getByLabelText("Increase quantity")
    const decreaseButton = screen.getByLabelText("Decrease quantity")

    expect(increaseButton).toBeDisabled()
    expect(decreaseButton).toBeDisabled()
  })

  it("disables the increase button when isAddButtonDisabled is true", () => {
    render(
      <QuantityControls
        quantity={3}
        onAdd={onAdd}
        onRemove={onRemove}
        isAddButtonDisabled={true}
      />,
    )

    const increaseButton = screen.getByLabelText("Increase quantity")

    expect(increaseButton).toBeDisabled()
  })
})
