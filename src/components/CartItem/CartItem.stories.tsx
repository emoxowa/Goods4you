import "../../index.scss"

import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { store } from "src/app/store"

import { CartItem } from "./CartItem"

const meta: Meta<typeof CartItem> = {
  title: "Components/Molecules/CartItem",
  component: CartItem,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    quantity: {
      control: { type: "number" },
      defaultValue: 1,
      description: "The quantity of the product in the cart",
    },
    onAdd: { action: "added" },
    onRemove: { action: "removed" },
    onDelete: { action: "deleted" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 1,
    title: "Sample Product",
    price: 19.99,
    thumbnail: "https://via.placeholder.com/70",
    quantity: 1,
  },
}

export const MultipleItems: Story = {
  args: {
    id: 2,
    title: "Sample Product with Multiple Items",
    price: 39.98,
    thumbnail: "https://via.placeholder.com/70",
    quantity: 2,
  },
}

export const Deleted: Story = {
  args: {
    id: 3,
    title: "Deleted Product",
    price: 105.86,
    thumbnail: "https://via.placeholder.com/70",
    quantity: 0,
  },
}
