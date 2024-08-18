import { Meta, StoryObj } from "@storybook/react"

import { Rating } from "./Rating"

const meta: Meta<typeof Rating> = {
  title: "Components/Atoms/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    rating: {
      control: { type: "number" },
      defaultValue: 3,
      description: "The current rating value",
    },
    maxRating: {
      control: { type: "number" },
      defaultValue: 5,
      description: "The maximum possible rating",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const HighRating: Story = {
  args: {
    rating: 5,
    maxRating: 5,
  },
}

export const LowRating: Story = {
  args: {
    rating: 1,
    maxRating: 5,
  },
}
