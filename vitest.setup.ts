import "@testing-library/jest-dom/vitest"

import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

afterEach(() => {
  cleanup()
})

import { vi } from "vitest"

vi.mock("src/assets/images/svg/emptyStar.svg", () => ({
  default: "empty-star-mock",
}))
vi.mock("src/assets/images/svg/filledStar.svg", () => ({
  default: "filled-star-mock",
}))
