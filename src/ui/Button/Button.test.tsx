import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { Button } from "./Button"

describe("Button component", () => {
  it("renders the button with default props", () => {
    render(<Button>Click Me</Button>)

    const buttonElement = screen.getByRole("button", { name: /click me/i })

    expect(buttonElement).toBeInTheDocument()

    expect(buttonElement.className).toMatch(/_button_/)
    expect(buttonElement.className).toMatch(/_default_/)
    expect(buttonElement.className).toMatch(/_medium_/)
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

    expect(buttonElement.className).toMatch(/_square_/)
    expect(buttonElement.className).toMatch(/_small_/)
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
