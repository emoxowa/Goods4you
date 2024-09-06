import "../../index.scss"

import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { store } from "src/app/store"

import { ProductItem } from "./ProductItem"

const meta: Meta<typeof ProductItem> = {
  title: "Components/Molecules/ProductItem",
  component: ProductItem,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "27px 35px",
              padding: "20px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <Story />
          </div>
        </MemoryRouter>
      </Provider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    quantity: {
      control: { type: "number" },
      defaultValue: 0,
      description: "The quantity of the product in the cart",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 1,
    title: "Sample Product",
    price: 29.99,
    thumbnail: "https://via.placeholder.com/300x300",
    quantity: 0,
  },
}

export const WithQuantity: Story = {
  args: {
    id: 2,
    title: "Product with Quantity",
    price: 59.99,
    thumbnail: "https://via.placeholder.com/300x300",
    quantity: 3,
  },
}
