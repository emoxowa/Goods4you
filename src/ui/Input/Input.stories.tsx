import { Meta, StoryObj } from "@storybook/react"

import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Components/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#$primary-bg-color",
        },
      ],
    },
  },
  argTypes: {
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Search by title",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Search by title",
    disabled: true,
  },
}
