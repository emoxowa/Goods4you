import { Meta, StoryObj } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

import { LinkButton } from "./LinkButton"

const meta: Meta<typeof LinkButton> = {
  title: "Components/Atoms/LinkButton",
  tags: ["autodocs"],
  component: LinkButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#484283",
        },
      ],
    },
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Click Me",
    to: "/",
  },
}

