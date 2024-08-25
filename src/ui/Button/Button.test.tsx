import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { Button } from "./Button"

describe("Button component", () => {
  it("renders the button with default props", () => {
    render(<Button>Click Me</Button>)

    const buttonElement = screen.getByRole("button", { name: /click me/i })

    expect(buttonElement).toBeInTheDocument()

    expect(buttonElement).toHaveClass(
      "_button_b22f72 _default_b22f72 _medium_b22f72",
    )
    expect(buttonElement).toHaveClass(
      "_button_b22f72 _default_b22f72 _medium_b22f72",
    )
    expect(buttonElement).toHaveClass(
      "_button_b22f72 _default_b22f72 _medium_b22f72",
    )
  })

  it("applies custom className", () => {
    render(<Button className="custom-class">Click Me</Button>)

    const buttonElement = screen.getByRole("button", { name: /click me/i })

    expect(buttonElement).toHaveClass("custom-class")
  })

  it('renders with the "square" variant and "small" size', () => {
    render(
      <Button variant="square" size="small">
        Click Me
      </Button>,
    )

    const buttonElement = screen.getByRole("button", { name: /click me/i })

    expect(buttonElement).toHaveClass(
      "_button_b22f72 _square_b22f72 _small_b22f72",
    )
    expect(buttonElement).toHaveClass(
      "_button_b22f72 _square_b22f72 _small_b22f72",
    )
  })


  it("passes additional props to the button element", () => {
    render(<Button type="submit">Submit</Button>)

    const buttonElement = screen.getByRole("button", { name: /submit/i })

    expect(buttonElement).toHaveAttribute("type", "submit")
  })

  it("should be disabled when the disabled prop is passed", () => {
    render(<Button disabled>Cannot Click Me</Button>)

    const buttonElement = screen.getByRole("button", {
      name: /cannot click me/i,
    })

    expect(buttonElement).toBeDisabled()
  })

  it("handles click events", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)

    const buttonElement = screen.getByRole("button", { name: /click me/i })
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
