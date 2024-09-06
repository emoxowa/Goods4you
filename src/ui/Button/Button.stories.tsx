import { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "square"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
    size: "medium",
    children: "Default Button",
  },
}

export const SquareSmall: Story = {
  args: {
    variant: "square",
    size: "small",
    children: "S",
  },
}

export const SquareMedium: Story = {
  args: {
    variant: "square",
    size: "medium",
    children: "M",
  },
}
