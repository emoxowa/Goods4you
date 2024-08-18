import "../../index.scss"

import { Meta, StoryObj } from "@storybook/react"

import { QuantityControls } from "./QuantityControls"

const meta: Meta<typeof QuantityControls> = {
  title: "Components/Atoms/QuantityControls",
  component: QuantityControls,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    quantity: {
      control: { type: "number" },
      defaultValue: 1,
      description: "The current quantity value",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      defaultValue: "small",
      description: "The size of the buttons",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "small" },
      },
    },
    onAdd: {
      action: "added",
      description: "Function to handle adding an item",
      table: {
        type: { summary: "function" },
      },
    },
    onRemove: {
      action: "removed",
      description: "Function to handle removing an item",
      table: {
        type: { summary: "function" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    id: 1,
    quantity: 2,
    size: "small",
  },
}

export const Medium: Story = {
  args: {
    id: 2,
    quantity: 5,
    size: "medium",
  },
}
